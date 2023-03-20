var b1 = document.getElementById("btn1");

var display = document.getElementById("display");

var text;

// operation = 1 -- plus
// operation = 2 -- minus
// operation = 3 -- multiply
// operation = 4 -- division
var operation;
var val1=0;
var val2=0;
var click = 0;
var done = false;

function dis(x)
{
    display.placeholder="0";
    if(done)
    {
        display.value = "";
        click = 0;
        done = false;
    }
    if(click == 0)
    {
        display.value += x;
    }
    else
    {
        display.value = parseFloat(display.value) + x;
    }
}


function plus()
{
    click = 0;
    operation = 1;
    if(display.value == "")
        val1 = 0;
    else 
        val1 = display.value;

    display.value = "";
}
function minus()
{
    click = 0;
    operation = 2;
    if(display.value == "")
        val1 = 0;
    else 
        val1 = display.value;

    display.value = "";
}
function multiply()
{
    click = 0;
    operation = 3;
    if(display.value == "")
        val1 = 0;
    else 
        val1 = display.value;

    display.value = "";
}
function division()
{
    click = 0;
    operation = 4; 
    if(display.value == "")
        val1 = 0;
    else 
        val1 = display.value;

    display.value = "";
}
function radical()
{
    if(display.value == "")
        val1 = 0;
    else 
        val1 = display.value;

    display.value = parseFloat(Math.sqrt(val1));
    done = true;
}
var message = "I love u <3";

function displayClear()
{
    display.placeholder="0";
    display.value = "";
    val1 = 0;
    val2 = 0;
    operation = 0;
    click = 0;
}


function equal()
{

    done = true;

    switch(operation)
    {
        case 1: //plus

            if(click == 0)
            {
                if(display.value == "")
                    val2 = 0;
                else 
                    val2 = display.value;

                display.value = parseFloat(val1) + parseFloat(val2);
                click = 1;
            }
            else
            {
                display.value = parseFloat(display.value) + parseFloat(val2);
            }

            break;
        case 2: //minus

            if(click == 0)
            {
                if(display.value == "")
                    val2 = 0;
                else 
                    val2 = display.value;

                display.value = parseFloat(val1) - parseFloat(val2);
                click = 1;
            }
            else
            {
                display.value = parseFloat(display.value) - parseFloat(val2);
            }

            break;
        case 3: //multiply

            if(click == 0)
            {
                if(display.value == "")
                    val2 = 0;
                else 
                    val2 = display.value;

                display.value = parseFloat(val1) * parseFloat(val2);
                click = 1;
            }
            else
            {
                display.value = parseFloat(display.value) * parseFloat(val2);
            }

            break;
        case 4: //division

            if(click == 0)
            {
                if(display.value == "")
                    val2 = 0;
                else 
                    val2 = display.value;

                if(val2 != 0)
                {
                    display.value = parseFloat(val1) / parseFloat(val2);
                    click = 1;
                }
                else
                    displayClear();
                
            }
            else
            {
                if(val2 != 0)
                {
                    display.value = parseFloat(display.value) / parseFloat(val2);
                }
                else
                    displayClear();
                
            }
            
            break;
        default:
            display.value = "";
            click = 0;
            break;
    }
}
var date = 19102004;
function percent()
{
    if(!done)
    {
        done = true;
        val2 = (parseFloat(display.value) * parseFloat(val1)) / 100;

        switch(operation)
    {
        case 1: //plus
            display.value = parseFloat(val1) + parseFloat(val2);
            break;
        case 2: //minus
            display.value = parseFloat(val1) - parseFloat(val2);
            break;
        case 3: //multiply
            display.value = parseFloat(val1) * parseFloat(val2);
            break;
        case 4: //division
            if(val2 != 0)
            {
                display.value = parseFloat(val1) / parseFloat(val2);
            }
            else
                displayClear();
            break;
        default:
            display.value = "";
            break;
    }
    }
    
}

function calculatorOff()
{
    
    if(display.value == date)
    {
        display.placeholder = message;
    }
    else
    {
        display.placeholder="I'm OFF :/";
    }
    display.value = "";
}


