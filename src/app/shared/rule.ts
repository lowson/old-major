export class Rule {
  enabled: boolean;
  action: string;
  proto: string;
  src: string;
  sport: string;
  dir: string;
  dst: string;
  dport: string;
  opts: any;
  references: any[];
  metadata: any[];
  payloads: any[];

  constructor(data?: any) {
    data = data || {};
    this.enabled = data.enabled || true;
    this.action = data.action || 'alert';
    this.proto = data.proto || 'tcp';
    this.src = data.src || '';
    this.sport = data.sport || '';
    this.dir = data.dir || '->';
    this.dst = data.dst || '';
    this.dport = data.dport || '';
    this.opts = {
      classtype: 'trojan-activity',
      sid: 1000000,
      rev: 1
    };
    this.references = [{
      type: 'url',
      value: ''
    }];
    this.metadata = [{
      k: '',
      v: ''
    }];
    this.payloads = [];
  }

  get options() {
    let rulePieces = [];

    if (this.opts.msg) {
      rulePieces.push('msg:"' + this.opts.msg + '"');
    }

    if (this.opts.flow) {
      let f = 'flow:' + (this.opts.flow);
      if (this.opts.flow_dir) {
        f += ',' + (this.opts.flow_dir);
      }
      if (this.opts.flow_stream) {
        f += ',' + (this.opts.flow_stream);
      }
      if (this.opts.flow_frag) {
        f += ',' + (this.opts.flow_frag);
      }
      rulePieces.push(f);
    }

    if (this.opts.frag_offset) {
      let fragoffset = 'fragoffset:';
      fragoffset += this.opts.frag_offset_mod || '!';
      fragoffset += this.opts.frag_offset;
      rulePieces.push(fragoffset);
    }

    if (this.opts.frag_m || this.opts.frag_d || this.opts.frag_r) {
      let fragbits = 'fragbits:';
      if (this.opts.frag_mod == 'not') {
        fragbits += '!';
      }
      fragbits += [
        (this.opts.frag_m ? 'M' : ''),
        (this.opts.frag_d ? 'D' : ''),
        (this.opts.frag_r ? 'R' : '')
      ].join('');
      if (this.opts.frag_mod == 'plus') {
        fragbits += '+';
      }
      if (this.opts.frag_mod == 'any') {
        fragbits += '*';
      }
      rulePieces.push(fragbits);
    }

    if (this.opts.flags_none_chk) {
      if (this.opts.flags_mod == 'not') {
        rulePieces.push('flags:!0');
      } else {
        let flags = 'flags:0';
        if (this.opts.flags_mod == 'plus') {
          flags += '+';
        }
        if (this.opts.flags_mod == 'any') {
          flags += '*';
        }
        rulePieces.push(flags);
      }
    } else {
      let flagString = 'flags:';
      if (this.opts.flags_mod == 'not') {
        flagString += '!';
      }
      let includeFlags = '';
      let excludeFlags = '';

      if (this.opts.flags_fin_chk) {
        if (this.opts.flags_fin) {
          includeFlags += 'F';
        } else {
          excludeFlags += 'F';
        }
      }

      if (this.opts.flags_syn_chk) {
        if (this.opts.flags_syn) {
          includeFlags += 'S';
        } else {
          excludeFlags += 'S';
        }
      }

      if (this.opts.flags_rst_chk) {
        if (this.opts.flags_rst) {
          includeFlags += 'R';
        } else {
          excludeFlags += 'R';
        }
      }

      if (this.opts.flags_psh_chk) {
        if (this.opts.flags_psh) {
          includeFlags += 'P';
        } else {
          excludeFlags += 'P';
        }
      }

      if (this.opts.flags_ack_chk) {
        if (this.opts.flags_ack) {
          includeFlags += 'A';
        } else {
          excludeFlags += 'A';
        }
      }

      if (this.opts.flags_urg_chk) {
        if (this.opts.flags_urg) {
          includeFlags += 'U';
        } else {
          excludeFlags += 'U';
        }
      }

      if (this.opts.flags_cwr_chk) {
        if (this.opts.flags_cwr) {
          includeFlags += 'C';
        } else {
          excludeFlags += 'C';
        }
      }

      if (this.opts.flags_ece_chk) {
        if (this.opts.flags_ece) {
          includeFlags += 'E';
        } else {
          excludeFlags += 'E';
        }
      }

      if (includeFlags) {
        flagString += includeFlags;
        if (this.opts.flags_mod == 'plus') {
          flagString += '+';
        }
        if (this.opts.flags_mod == 'any') {
          flagString += '*';
        }
        if (excludeFlags) {
          flagString += ',' + excludeFlags;
        }
        rulePieces.push(flagString);
      }
    }

    if (this.opts.ttl) {
      rulePieces.push('ttl:' + this.opts.ttl);
    }
    if (this.opts.tos) {
      rulePieces.push('tos:' + this.opts.tos);
    }
    if (this.opts.same_ip) {
      rulePieces.push('sameip');
    }
    if (this.opts.ipopts) {
      rulePieces.push('ipopts:' + this.opts.ipopts);
    }
    if (this.opts.ip_id) {
      rulePieces.push('id:' + this.opts.ip_id);
    }
    if (this.opts.ip_proto) {
      rulePieces.push('ip_proto:' + this.opts.ip_proto);
    }
    if (this.opts.tcp_seq) {
      rulePieces.push('seq:' + this.opts.tcp_seq);
    }
    if (this.opts.tcp_ack) {
      rulePieces.push('ack:' + this.opts.tcp_ack);
    }
    if (this.opts.tcp_win_size) {
      rulePieces.push('window:' + this.opts.tcp_win_size);
    }
    if (this.opts.icmp_type) {
      rulePieces.push('itype:' + this.opts.icmp_type);
    }
    if (this.opts.icmp_code) {
      rulePieces.push('icode:' + this.opts.icmp_code);
    }
    if (this.opts.icmp_id) {
      rulePieces.push('icmp_id:' + this.opts.icmp_id);
    }
    if (this.opts.icmp_seq) {
      rulePieces.push('icmp_seq:' + this.opts.icmp_seq);
    }


    for (let bit of this.payloads) {

      if (bit.t == 'modifier' && bit.val) {
        rulePieces.push(bit.val);
      }

      if (bit.t == 'regex' && bit.regex) {
        let pcre = 'pcre:';
        if (bit.inverted) {
          pcre += '!';
        }
        pcre += '"/' + bit.regex + '/' + [
          (bit.flag_i ? 'i' : ''),
          (bit.flag_s ? 's' : ''),
          (bit.flag_m ? 'm' : ''),
          (bit.flag_x ? 'x' : ''),
          (bit.flag_A ? 'A' : ''),
          (bit.flag_E ? 'E' : ''),
          (bit.flag_G ? 'G' : ''),
          (bit.flag_R ? 'R' : ''),
          (bit.flag_U ? 'U' : ''),
          (bit.flag_I ? 'I' : ''),
          (bit.flag_P ? 'P' : ''),
          (bit.flag_H ? 'H' : ''),
          (bit.flag_D ? 'D' : ''),
          (bit.flag_M ? 'M' : ''),
          (bit.flag_C ? 'C' : ''),
          (bit.flag_K ? 'K' : ''),
          (bit.flag_S ? 'S' : ''),
          (bit.flag_Y ? 'Y' : ''),
          (bit.flag_B ? 'B' : ''),
          (bit.flag_O ? 'O' : '')
        ].join('') + '"';
        rulePieces.push(pcre);
      }

      if (bit.t == 'content' && bit.pattern) {
        if (bit.content_filter_type) {
          let s = 'protected_content:';
          if (bit.content_inverted) {
            s += '!';
          }
          s += '"' + bit.pattern + '"';
          rulePieces.push(s);
          rulePieces.push('hash:' + (bit.hash || 'md5'));
          rulePieces.push('length:' + bit.original_length);
        } else {
          let s = 'content:';
          if (bit.content_inverted) {
            s += '!';
          }
          s += '"' + bit.pattern + '"';
          rulePieces.push(s);
        }

        if (bit.fast_pattern) {
          if (bit.fast_pattern == 'simple') {
            rulePieces.push('fast_pattern');
          } else if (bit.fast_pattern == 'only') {
            rulePieces.push('fast_pattern:only');
          } else if (bit.fast_pattern == 'args') {
            let fastPattern = 'fast_pattern:';
            fastPattern += bit.fast_pattern_offset;
            fastPattern += ',' + bit.fast_pattern_length;
            rulePieces.push(fastPattern);
          }
        }

        if (!bit.mod_raw) {
          if (!bit.uri_content_pattern &&
              bit.restrict_body) {
            rulePieces.push('http_client_body');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_cookie &&
              !bit.fast_pattern) {
            rulePieces.push('http_cookie');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_raw_cookie &&
              !bit.fast_pattern &&
              !bit.restrict_cookie) {
            rulePieces.push('http_raw_cookie');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_header) {
            rulePieces.push('http_header');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_raw_header &&
              !bit.fast_pattern &&
              !bit.restrict_header) {
            rulePieces.push('http_raw_header');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_method &&
              !bit.fast_pattern) {
            rulePieces.push('http_method');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_uri) {
            rulePieces.push('http_uri');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_raw_uri &&
              !bit.fast_pattern &&
              !bit.restrict_uri) {
            rulePieces.push('http_raw_uri');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_stat_code &&
              !bit.fast_pattern) {
            rulePieces.push('http_stat_code');
          }
          if (!bit.uri_content_pattern &&
              bit.restrict_stat_msg &&
              !bit.fast_pattern) {
            rulePieces.push('http_stat_msg');
          }

          if (bit.uri_content_pattern) {
            let uriContent = 'uricontent:';
            if (bit.uri_content_inverted) {
              uriContent += '!';
            }
            uriContent += '"' + bit.uri_content_pattern + '"';
            rulePieces.push(uriContent);
          }
        }

        if (bit.uri_length) {
          let uriLen = 'urilen:' + bit.uri_length;
          if (bit.uri_length_mod) {
            uriLen += ',' + bit.uri_length_mod;
          }
          rulePieces.push(uriLen);
        }

        if (bit.depth) {
          rulePieces.push('depth:' + bit.depth);
        }
        if (bit.offset) {
          rulePieces.push('offset:' + bit.offset);
        }
        if (bit.distance) {
          rulePieces.push('distance:' + bit.distance);
        }
        if (bit.within) {
          rulePieces.push('within:' + bit.within);
        }
        if (bit.mod_cvs && !bit.uricontent) {
          rulePieces.push('cvs:invalid-entry');
        }
        if (bit.mod_ftp && !bit.uricontent) {
          rulePieces.push('ftpbounce');
        }
        if (bit.mod_case) {
          rulePieces.push('nocase');
        }
        if (bit.mod_raw) {
          rulePieces.push('rawbytes');
        }

        if (bit.isdataat) {
          let d = 'isdataat:';
          if (bit.isdataat_inverted) {
            d += '!';
          }
          d += bit.isdataat;
          if (bit.isdataat_mod) {
            d += ',' + bit.isdataat_mod;
          }
          rulePieces.push(d);
        }
      }

      if (bit.t == 'flowbits' &&
          (bit.flowbits || bit.action == 'noalert' || bit.action == 'reset')) {
        let f = 'flowbits:' + (bit.action || 'set');
        if (bit.flowbits) {
          f += ',' + bit.flowbits;
        }
        if (bit.group) {
          f += ',' + bit.group;
        }
        rulePieces.push(f);
      }

      if (bit.t == 'bytetest' && bit.bytes && bit.offset && bit.value) {
        let s = 'byte_test:' + bit.bytes;
        s += ',' + (bit.negate_operator ? '!' : '') + (bit.operator || '<');
        s += ',' + bit.value;
        s += ',' + bit.offset;
        if (bit.relative) {
          s += ',relative';
        }
        s += ',' + (bit.endian || 'big');
        if (bit.string) {
          s += ',string,' + (bit.string_type || 'hex');
        }
        if (bit.dce) {
          s += ',dce';
        }
        rulePieces.push(s);
      }

      if (bit.t == 'bytejump' && bit.bytes && bit.offset) {
        let s = 'byte_jump:' + bit.bytes;
        s += ',' + bit.offset;
        if (bit.relative) {
          s += ',relative';
        }
        if (bit.multiplier) {
          s += ',multiplier ' + bit.multiplier;
        }
        s += ',' + (bit.endian || 'big');
        if (bit.string) {
          s += ',string,' + (bit.string_type || 'hex');
        }
        if (bit.align) {
          s += ',align';
        }
        if (bit.from_beginning) {
          s += ',from_beginning';
        }
        if (bit.post_offset) {
          s += ',post_offset ' + bit.post_offset;
        }
        if (bit.dce) {
          s += ',dce';
        }
        rulePieces.push(s);
      }

      if (bit.t == 'byteextract' && bit.bytes && bit.offset && bit.name) {
        let s = 'byte_jump:' + bit.bytes;
        s += ',' + bit.offset;
        s += ',' + bit.name;
        if (bit.relative) {
          s += ',relative';
        }
        if (bit.multiplier) {
          s += ',multiplier ' + bit.multiplier;
        }
        s += ',' + (bit.endian || 'big');
        if (bit.string) {
          s += ',string,' + (bit.string_type || 'hex');
        }
        if (bit.align) {
          s += ',align';
        }
        if (bit.dce) {
          s += ',dce';
        }
        rulePieces.push(s);
      }
    }

    if (this.opts.logto) {
      rulePieces.push('logto:' + this.opts.logto);
    }
    if (this.opts.session) {
      rulePieces.push('session:' + this.opts.session);
    }
    if (this.opts.activates) {
      rulePieces.push('activates:' + this.opts.activates);
    }
    if (this.opts.activated_by) {
      rulePieces.push('activated_by:' + this.opts.activated_by);
    }
    if (this.opts.count) {
      rulePieces.push('count:' + this.opts.count);
    }

    if (this.opts.tag_count) {
      if (this.opts.tag_type == 'session') {
        let tag = 'tag:session,' + this.opts.tag_count + ',';
        tag += (this.opts.tag_unit || 'packets');
        if (this.opts.tag_exclusive) {
          tag += ',exclusive';
        }
        rulePieces.push(tag);
      } else {
        let tag = 'tag:host,' + this.opts.tag_count + ',';
        tag += (this.opts.tag_unit || 'packets') + ',';
        tag += (this.opts.tag_direction || 'src');
        rulePieces.push(tag);
      }
    }

    if (this.opts.threshold_count && this.opts.threshold_seconds) {
      let threshold = 'threshold: type ' + (this.opts.threshold_action || 'limit');
      threshold += ',track ' + (this.opts.threshold_track || 'by_src');
      threshold += ',count ' + this.opts.threshold_count;
      threshold += ',seconds ' + this.opts.threshold_seconds;
      rulePieces.push(threshold);
    }

    if (this.opts.detection_filter_count && this.opts.detection_filter_seconds) {
      let filter = 'detection_filter:track ' + (this.opts.detection_filter_track || 'by_src');
      filter += ',count ' + this.opts.detection_filter_count;
      filter += ',seconds ' + this.opts.detection_filter_seconds;
      rulePieces.push(filter);
    }

    for (let i of this.references) {
      if (i.value) {
        rulePieces.push('reference:' + i.type + ' ' + i.value);
      }
    }

    for (let i of this.metadata) {
      if (i.k && i.v) {
        rulePieces.push('metadata:' + i.k + ' ' + i.v);
      }
    }

    rulePieces.push('classtype:' + (this.opts.classtype || 'attempted-admin'));

    if (this.opts.priority) {
      rulePieces.push('priority:' + this.opts.priority);
    }
    if (this.opts.sid) {
      rulePieces.push('sid:' + this.opts.sid);
    }
    if (this.opts.rev) {
      rulePieces.push('rev:' + this.opts.rev);
    }
    return rulePieces.length ? '(' + rulePieces.join('; ') + ';)' : '';
  }
}
