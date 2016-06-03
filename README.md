# Old Major
Graphical Snort rule builder. This tool should help writing Snort rules by
preventing invalid values for most fields as well as invalid combinations
of fields.

## Installation

Old Major can be used as a web or desktop app. For web use, run
`npm install && ng build` in the /web directory and copy 
the /dist folder to your web root.

For desktop use, do the same, but copy /dist to the /desktop folder
in the old-major directory instead. This folder contains a config file
for Electron, which you'll also need to install with 
`sudo npm install -g electron-prebuilt`. Once Electron is installed,
you can run the app with the run.sh script.

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
requires that you specify a message for the rule, and that the SID of the
rule be greater than 1000000 in accordance with the established convention
for custom rules.

### Non-Payload

The non-payload tab contains fields related to flow, frag, protocol, and flags.

### Payload

The payload tab contains the cursor modifier, content pattern, PCRE, flowbit, byte jump, byte test, and byte extract fields. Sections are added by clicking on the sidebar. The sections can be rearranged by clicking and dragging using the drag handles on the left of the list items and removed using the X on the right.

### Post-Detection

The post-detection tab contains the tag, threshold, detection filter, and other post-detection fields.

## Roadmap

There are still many features that can be implemented, including:
- support for base64\_decode and base\_64 data
- support for ASN1
- support for Suricata-specific options, with a toggle for Snort/Suricata
- more validation, such as ensuring that PCRE is not the first payload section in a rule
- importing existing rules
- user-specified values for the Source/Destination IP/Port fields (i.e. variables)
