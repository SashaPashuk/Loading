import React, { useState } from "react"

import Slider from '@mui/material/Slider';

const Other = () =>{

    const marksOne = [
        {
          value: 3,
          label: '3',
        },
        {
          value: 7,
          label: '7',
        },
        {
          value: 14,
          label: '14',
        },
    ];

    const marksTwo = [
        {
            value: 54,
            label: '54',
        },
        {
            value: 70,
            label: '70',
        },
    ]
    

    const [sliderFirst, setFirst] = useState(0)
    

    function valuetext(value) {
        setFirst(value)
        return `${value}°C`;
    }
    
    function valuetextMini(value){
        return `${value}°C`;
    }

    function valueLabelFormat(value) {
        let mark = marksOne.findIndex((mark) => mark.value === value) + 1;
        return mark;
    }

    function valueLabelFormatTwo(value) {
        let mark = marksTwo.findIndex((mark) => mark.value === value) + 1;
        return mark;
    }

    console.log(sliderFirst)

    return(
        <div className="slider container">
            <Slider
            aria-label="Small steps"
            defaultValue={2000}
            getAriaValueText={valuetext}
            step={1000}
            marks
            min={0}
            max={20000}
            valueLabelDisplay="on"
            />
            {sliderFirst > 10000 ? (
                <Slider
                key="slider2"
                aria-label="Restricted values"
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetextMini}
                step={null}
                marks={marksTwo}
                defaultValue={54}
                /> 
            ): (
                <Slider
                key="slider1"
                aria-label="Restricted values"
                valueLabelFormat={valueLabelFormatTwo}
                getAriaValueText={valuetextMini}
                step={null}
                marks={marksOne}
                defaultValue={14}
                /> 
            )
                
        }
            
        </div>
    )
}

export default Other;