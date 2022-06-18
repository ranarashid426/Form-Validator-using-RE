let re;
re = /hello/;
re = /hello/i; //case insensitive
re = /^hello/;
re = /^hello$/i;
re = /h.llo/i;
re = /h*llo/i;
re = /Gra?e?y/i;
re = /Gra?e?y\?/i;


// Brackets notations
re = /Gr[ae]y/i; //either contain a or e and nothing else in bracket
re = /[GF]rey/i;
re = /[^GF]rey/i;
re = /[A-Z]rey/;
re = /[A-Za-z]rey/; //Any letter
re = /[0-4]rey/; //Digit from 0-4
re = /[0-9]rey/; //Digit from 0-9
re = /[0-9][0-9]rey/; //FOr using something like 10,50,80 
re = /hello/i

// Braces {} - Quantifiers
re = /hel{2}o/ // l must occur {m} times
re = /hel{2,4}o/ // l must occur {m} times
re = /hel{2,}o/ // l must occur {m} times i.e 2 or more than 2. Not less than 2

// Parenthesis -() for grouping

// re = /^([0-9]x){3}$/
// str = '4x4x4x'

re = /\w/ // Must contain numbers or letters or underscore _  but not other than that
re = /\w+/ //Match the whole word
re = /\W/ // Must not contain number or letter or underscore
re = /\d/ // 
re = /\d+/
re = /\D/
re = /Hell\b/i //word boundry -- only matches the hell not hello

// str = 'Hello there, Welcome to hell'
// Assertions
re = /x(?=y)/ // Match x if only followed with y
re = /x(?!y)/ // Match x if not followed with y

str = 'jksskxylkjs'


const result = re.exec(str)
console.log(result)
function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    }else{
        console.log(`${str} do not match ${re.source}`)
    }
}
// console.log(re.source)

reTest(re,str)