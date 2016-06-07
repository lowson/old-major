# Old Major
Graphical Snort rule builder. This tool should help writing Snort rules by
preventing invalid values for most fields as well as invalid combinations
of fields.

## Installation

Old Major can be used as a web or desktop app. First, run
`npm install && ng build` in the Old Major directory.

For desktop use, run `npm run desktop`. To use as a web app,
copy the /dist folder to your web root.

## Usage

The Old Major interface consists of two sections: the rule output at the
top of the page and the rule form below it.
The output box displays the text of the rule. It is automatically 
generated on the fly from the values in the form. If there are any errors,
the box will turn red and a (!) icon will appear. The fields containing the
errors will be indicated either by a (!) icon or by help text explaining what
the correct format for the input should be.

There are four main sections within the rule form:

### General

The general tab contains the rule header and general options. Old Major 
requires that the SID of the rule be greater than 1000000 in accordance with the
established convention for custom rules.

### Non-Payload

The non-payload tab contains fields related to flow, frag, protocol, and flags.

### Payload

The payload tab contains the cursor modifier, content pattern, PCRE, flowbit,
byte jump, byte test, and byte extract fields. Sections are added by clicking on
the sidebar. The sections can be rearranged by clicking and dragging using the
drag handles on the left of the list items and removed using the X on the right.

### Post-Detection

The post-detection tab contains the tag, threshold, detection filter, and other
post-detection fields.

## Roadmap

There are still many features that can be implemented, including:
- support for base64\_decode and base\_64 data
- support for ASN1
- support for Suricata-specific options, with a toggle for Snort/Suricata
- more validation, such as ensuring that PCRE is not the first payload section
in a rule
- importing existing rules
- user-specified values for the Source/Destination IP/Port fields
(i.e. variables)


## Development

See CONTRIBUTING.md for instructions on how to contribute to this project.

### Testing

Run `ng test` to run the Karma tests over the project.

### Building

Run `ng build` to compile the Typescript files into the /dist directory.

### Running

Run `ng serve` for a dev server with live reload. The app will run on port 4200
by default.