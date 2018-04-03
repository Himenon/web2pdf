#!/usr/bin/env node
const web2pdf = require("web2pdf");

const url = process.argv[2];
const output = process.argv[3];

web2pdf.makePDF(url, output);
