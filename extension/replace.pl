use strict;
use warnings;
use 5.22.0;

while(<STDIN>){
  chomp;
  if(/(^[\s\S]*)(chrome\..*.addListener)([\s\S]*)__REPLACE__([\s\S]*)$/){
    say "$1$2$3$2$4";
  }else{
    say;
  }
}
