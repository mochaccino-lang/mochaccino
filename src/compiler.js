let modules = "";
process.argv.length < 3 && (console.log("You have to put the name of your file after the first word, silly!"), process.exit(1));
var fs = require("fs");

function characterspecific(e) {
    this.string = e;
    this.new = this.string.replace(/_toy_/g, "+=");
    this.new = this.new.replace(/_take_/g, "-=");
    this.new = this.new.replace(/_is_/g, "=");
    this.new = this.new.replace(/int_/g, "let ");
    this.new = this.new.replace(/..like_/g, "$");
    this.new = this.new.replace(/uhhh_/g, "$");
    this.new = this.new.replace(/_plus_/g, "+");
    this.new = this.new.replace(/_minus_/g, "-");
    this.new = this.new.replace(/_times_/g, "*");
    this.new = this.new.replace(/_modulo_/g, "%");
    this.new = this.new.replace(/_devided_by_/g, "/");
    this.new = this.new.replace(/_int/g, " | bc");
    // this.new = this.string.replace(/import_/g, ". mochamodules/");
    // this.new = this.string.replace(/gimme_/g, ". mochamodules/");
    this.new = this.new.replace(/preach_/g, "echo ");
    this.new = this.new.replace(/order/g, "function");
    this.new = this.new.replace(/_pi_/g, "3.14159265358979");
    this.new = this.new.replace(/_pi/g, "3.14159265358979");
    this.new = this.new.replace(/_sol/g, "299792458");
    this.new = this.new.replace(/_sol_/g, "299792458");
    this.new = this.new.replace(/_euler_/g, "2.71828");
    this.new = this.new.replace(/euler_/g, "2.71828");
    this.new = this.new.replace(/_s2/g, "1.41421356237309504880168872420969807856967187537694807317667973799");
    this.new = this.new.replace(/_s2_/g, "1.41421356237309504880168872420969807856967187537694807317667973799");
    return this.new;
}
filename = process.argv[2] + ".mochaccino", filecontents = "", filecontents = fs.readFileSync(filename, "utf8"), filecontents = filecontents.split(" "), filecontents = filecontents.join("_");
let processed = characterspecific(filecontents),
    final = modules + "\n" + (processed = processed.replace(/\_/g, " "));
fs.writeFile(process.argv[2] + ".mocha", final, function() {
    console.log("Your File is Done Compiling!"), console.log("Run Your File With ./" + process.argv[2].toString() + ".mocha")
});
var sys = require("util"),
    exec = require("child_process").exec;
exec("dos2unix " + process.argv[2].toString() + ".mocha", function(e, s, i) {
    e && (console.log(e.code), console.log("You may have to install dos2unix with: apt-get install dos2unix"))
});