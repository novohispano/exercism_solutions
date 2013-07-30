"use strict";

global.DNA = function (strand) {
    var nucleotides = [ "A", "T", "C", "G", "U" ];

    this.countNucleotides = function () {
        var counts     = { A : 0, T : 0, C : 0, G : 0 },
            i          = 0,
            nucleotide = "";

        for (i = 0; i < strand.length; i += 1) {
            nucleotide = strand[i];
            counts[nucleotide] += 1;
        }

        return counts;
    };

    this.nucleotideCounts = this.countNucleotides();

    this.validateNucleotide = function (nucleotide) {
        if (nucleotides.indexOf(nucleotide) === -1) {
            throw new Error("Invalid Nucleotide");
        }
    };

    this.count = function (nucleotide) {
        this.validateNucleotide(nucleotide);

        return (this.nucleotideCounts[nucleotide] || 0);
    };
};