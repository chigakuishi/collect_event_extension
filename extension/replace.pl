use strict;
use warnings;
use 5.28.0;

while(<STDIN>){
  chomp;
  if(/(^[\s\S]*)(chrome\..*.(?:addListener|getAll))([\s\S]*)__REPLACE__([\s\S]*)$/){
    say "$1$2$3$2$4";
  }else{
    say;
  }
}
