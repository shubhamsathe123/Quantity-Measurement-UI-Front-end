let length = [
    "Meter", "KiloMeter", "CentiMeter", "MiliMeter", "MicroMeter", "Mile", "Foot", "Inch"
];

let Temp = [
    "Fahrenhit", "Celcius"
];

let volume = [
    "MiliLitre", "Litre"
];
let input;
onStart = () => {
    input = "Length";
    $("#lengthCard").addClass("card1Click");
    $("#tempCard").removeClass("card2Click");
    $("#volumeCard").removeClass("card3Click");
    $("#leftMeasure").show(() => {
        leftSelect(length);
    });
    $("#rightMeasure").show(() => {
        rightSelect(length);
    });

}
$(document).ready(() => {
    $("#lengthCard").on('click', () => {
        input = "Length";
        $("#lengthCard").addClass("card1Click");
        $("#tempCard").removeClass("card2Click");
        $("#volumeCard").removeClass("card3Click");
        $("#leftInput").val(null);
        $("#rightInput").val(null);
        $("#leftMeasure").show(() => {
            leftSelect(length);
        });
        $("#rightMeasure").show(() => {
            rightSelect(length);
        });
    });

    $("#tempCard").on('click', () => {
        input = "Temperature";
        $("#tempCard").addClass("card2Click");
        $("#lengthCard").removeClass("card1Click");
        $("#volumeCard").removeClass("card3Click");
        $("#leftInput").val(null);
        $("#rightInput").val(null);
        $("#leftMeasure").show(() => {
            leftSelect(Temp);
        });
        $("#rightMeasure").show(() => {
            rightSelect(Temp);
        });
    });
    $("#volumeCard").on('click', () => {
        input = "Volume";
        $("#volumeCard").addClass("card3Click");
        $("#tempCard").removeClass("card2Click");
        $("#lengthCard").removeClass("card1Click");
        $("#leftInput").val(null);
        $("#rightInput").val(null);
        $("#leftMeasure").show(() => {
            leftSelect(volume);
        });
        $("#rightMeasure").show(() => {
            rightSelect(volume);
        });
    });
});

leftSelect = (dropValue) => {
    $('#leftMeasure').empty();
    $.each(dropValue, function (key, value) {
        var items = `<option>${value}</option>`;
        $('#leftMeasure').append(items);
    });
}

rightSelect = (dropValue) => {
    $('#rightMeasure').empty();
    $.each(dropValue, function (key, value) {
        var items = `<option>${value}</option>`;
        $('#rightMeasure').append(items);
    });

    console.log(input);
}

let firstOption;
let secondOption;
let value = 0;

calculate = () => {
    let funcValue = ($("#leftInput").val())
    console.log(funcValue);
    let funcOption = $("#leftMeasure option:selected").text();
    console.log(funcOption);
    let funcOption2 = $("#rightMeasure option:selected").text();
    console.log(funcOption2);
    switch (funcOption) {
        case 'Meter':
            if (funcOption2 == "KiloMeter") {
                value = funcValue / 1000;
                console.log(value);
            }
            else if (funcOption2 == "CentiMeter") {
                value = funcValue / 0.01;
                console.log(value);
            }
            else if (funcOption2 == "MiliMeter") {
                value = funcValue * 1000;
                console.log(value);
            }
            else if (funcOption2 == "MicroMeter") {
                value = funcValue * 1000000;
                console.log(value);
            }
            else if (funcOption2 == "Mile") {
                value = funcValue / 1609;
                console.log(value);
            }
            else if (funcOption2 == "Foot") {
                value = funcValue * 3.281;
                console.log(value);
            }
            else if (funcOption2 == "Inch") {
                value = funcValue * 39.37;
                console.log(value);
            }
            break;
        case 'KiloMeter':
            if (funcOption2 == "Meter") {
                value = funcValue * 1000;
                console.log(value);
            }
            else if (funcOption2 == "CentiMeter") {
                value = funcValue * 100000;
                console.log(value);
            }
            else if (funcOption2 == "MiliMeter") {
                value = funcValue * 1000000;
                console.log(value);
            }
            else if (funcOption2 == "MicroMeter") {
                value = funcValue * 1000000000;
                console.log(value);
            }
            else if (funcOption2 == "Mile") {
                value = funcValue / 1.609;
                console.log(value);
            }
            else if (funcOption2 == "Foot") {
                value = funcValue * 3281;
                console.log(value);
            }
            else if (funcOption2 == "Inch") {
                value = funcValue * 39370;
                console.log(value);
            }
            break;
        case 'CentiMeter':
            if (funcOption2 == "Meter") {
                value = funcValue / 100;
                console.log(value);
            }
            else if (funcOption2 == "KiloMeter") {
                value = funcValue / 100000;
                console.log(value);
            }
            else if (funcOption2 == "MiliMeter") {
                value = funcValue * 10;
                console.log(value);
            }
            else if (funcOption2 == "MicroMeter") {
                value = funcValue * 10000;
                console.log(value);
            }
            else if (funcOption2 == "Mile") {
                value = funcValue / 160934;
                console.log(value);
            }
            else if (funcOption2 == "Foot") {
                value = funcValue / 30.48;
                console.log(value);
            }
            else if (funcOption2 == "Inch") {
                value = funcValue / 2.54;
                console.log(value);
            }
            break;
        case 'MiliMeter': if (funcOption2 == "Meter") {
            value = funcValue / 1000;
            console.log(value);
        }
        else if (funcOption2 == "KiloMeter") {
            value = funcValue / 1000000;
            console.log(value);
        }
        else if (funcOption2 == "CentiMeter") {
            value = funcValue / 10;
            console.log(value);
        }
        else if (funcOption2 == "MicroMeter") {
            value = funcValue * 1000;
            console.log(value);
        }
        else if (funcOption2 == "Mile") {
            value = funcValue / 1.609e+6;
            console.log(value);
        }
        else if (funcOption2 == "Foot") {
            value = funcValue / 305;
            console.log(value);
        }
        else if (funcOption2 == "Inch") {
            value = funcValue / 25.4;
            console.log(value);
        }
            break;
        case 'MicroMeter': if (funcOption2 == "Meter") {
            value = funcValue / 1e+6;
            console.log(value);
        }
        else if (funcOption2 == "KiloMeter") {
            value = funcValue / 1e+9;
            console.log(value);
        }
        else if (funcOption2 == "CentiMeter") {
            value = funcValue / 10000;
            console.log(value);
        }
        else if (funcOption2 == "MiliMeter") {
            value = funcValue * 1000;
            console.log(value);
        }
        else if (funcOption2 == "Mile") {
            value = funcValue / 1.609e+9;
            console.log(value);
        }
        else if (funcOption2 == "Foot") {
            value = funcValue / 304800;
            console.log(value);
        }
        else if (funcOption2 == "Inch") {
            value = funcValue / 25400;
            console.log(value);
        }
            break;
        case 'Mile': if (funcOption2 == "Meter") {
            value = funcValue * 1609;
            console.log(value);
        }
        else if (funcOption2 == "KiloMeter") {
            value = funcValue * 1.609;
            console.log(value);
        }
        else if (funcOption2 == "CentiMeter") {
            value = funcValue * 160934;
            console.log(value);
        }
        else if (funcOption2 == "MiliMeter") {
            value = funcValue * 1.609e+6;
            console.log(value);
        }
        else if (funcOption2 == "MicroMeter") {
            value = funcValue / 1.609e+9;
            console.log(value);
        }
        else if (funcOption2 == "Foot") {
            value = funcValue * 5280;
            console.log(value);
        }
        else if (funcOption2 == "Inch") {
            value = funcValue * 63360;
            console.log(value);
        }
            break;
        case 'Foot': if (funcOption2 == "Meter") {
            value = funcValue / 3.281;
            console.log(value);
        }
        else if (funcOption2 == "KiloMeter") {
            value = funcValue / 3281;
            console.log(value);
        }
        else if (funcOption2 == "CentiMeter") {
            value = funcValue * 30.48;
            console.log(value);
        }
        else if (funcOption2 == "MiliMeter") {
            value = funcValue * 305;
            console.log(value);
        }
        else if (funcOption2 == "MicroMeter") {
            value = funcValue * 304800;
            console.log(value);
        }
        else if (funcOption2 == "Mile") {
            value = funcValue / 5280;
            console.log(value);
        }
        else if (funcOption2 == "Inch") {
            value = funcValue * 12;
            console.log(value);
        }
            break;
        case 'Inch': if (funcOption2 == "Meter") {
            value = funcValue / 39.37;
            console.log(value);
        }
        else if (funcOption2 == "KiloMeter") {
            value = funcValue / 39370;
            console.log(value);
        }
        else if (funcOption2 == "CentiMeter") {
            value = funcValue * 2.54;
            console.log(value);
        }
        else if (funcOption2 == "MiliMeter") {
            value = funcValue * 25.4;
            console.log(value);
        }
        else if (funcOption2 == "MicroMeter") {
            value = funcValue * 25400;
            console.log(value);
        }
        else if (funcOption2 == "Mile") {
            value = funcValue / 63360;
            console.log(value);
        }
        else if (funcOption2 == "Foot") {
            value = funcValue / 12;
            console.log(value);
        }
            break;
        case 'Fahrenhit': if (funcOption2 == "Celcius") {
            value = (funcValue - 32) / 1.8;
            console.log(value);
        }
            break;
        case 'Celcius': if (funcOption2 == "Fahrenhit") {
            value = (funcValue * 9 / 5) + 32;
            console.log(value);
        }
        case 'MiliLitre': if (funcOption2 == "Litre") {
            value = funcValue / 1000;
            console.log(value);
        }
        case 'Litre': if (funcOption2 == "MiliLitre") {
            value = funcValue * 1000;
            console.log(value);
        }
    };
    $("#rightInput").val(value);
};