const yargs=require('yargs');

yargs.command({
    command:'add',
    describe:'adding the command',
    handler:function(){
        console.log("Addinng The Command");
    }
})

yargs.command({
    command:'remove',
    describe:'removing the command',
    handler:function(){
        console.log("Removing The Command");
    }
})

yargs.command({
    command:'read',
    describe:'reading the command',
    handler:function(){
        console.log("Reading The Command");
    }
})

console.log(yargs.argv)