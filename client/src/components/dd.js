<div className="logandreg2">


<html dir="rtl">
    <Form>

    <div class="body">
    <MainContainer>


        <div class="testbox">

            <input class="input3" type="text" ref={ref} style={{ width: "50%" }} defaultValue="" placeholder="הזן מיקום" id="SearchLocationBox" />
            <br></br>
            <br></br>
            {submitted && !isPlaceValid && <p class="placeValid" >נא להזין מיקום</p>}

            &nbsp;<span class="required"></span>  תאריך התחלה
            <input type="date" id="date-input"
                onBlur={handleChangeStartDate}
                class="inputDate"
                min={new Date().toISOString().substr(0, 10)} required />


            <span class="required"></span >  תאריך סיום
            <label htmlFor="date-input"></label>
            <input
                type="date"
                onFocus={handleFocusEndDate}
                id="date-input"
                class="inputDate"
                onBlur={handleChangeEndDate} required
            />

            <br></br>
            <br></br>
            <div class="startValid">{errorMessageStart}</div>
            <div class="endValid">{errorMessageEnd}</div>
            {submitted && !isStartValid && <p class="startValid" >נא להזין תאריך התחלה</p>}
            {submitted && !isEndValid && <p class="endValid" >נא להזין תאריך סיום</p>}
            <div className="dropdown" id='dropdown'>
                <Autocomplete

                    id="combo-box-demo dropspace"
                    className="dropspace"
                    // value={selectedOption}
                    options={areaOptions}
                    getOptionLabel={option => option}
                    style={{ width: 265 }}
                    renderInput={params => (

                        <TextField className="drop" {...params} label=" בחר אזור " variant="outlined" />
                    )}
                    // onChange={handleChange4}

                    onChange={(event, area) => {

                        setAreaValue(area)
                        setSelectedOption(area);
                    }}
                />


                {/* <select value={selectedOption} onChange={handleChange4} required class="select2">
<option class="slide" value=""><b>בחר אזור</b></option>
<option class="slide" value="צפון">צפון</option>
<option class="slide" value="מרכז">מרכז</option>
<option class="slide" value="דרום">דרום</option>
</select> */}
                {submitted && !isAreaValid && <p class="areaValid" >נא להזין אזור מבוקש</p>}



                <Autocomplete

                    id="combo-box-demo "
                    // value={selectedOptionDistance}
                    options={distanceOptions}
                    getOptionLabel={option => option}
                    style={{ width: 265 }}
                    renderInput={params => (

                        <TextField className="drop"{...params} label="בחר מרחק מקסימלי לאטרקציות " variant="outlined" />
                    )}
                    // onChange={handleChange5}
                    // onChange={(event)=>{
                    //     setDistanceValue(event.target.value)
                    //     setSelectedOptionDistance(event.target.value);  
                    // }}

                    onChange={(event, distance) => {

                        console.log(distance);
                        setDistanceValue(distance);
                        const selectedDistance = parseInt(distance) * 1000;
                        setSelectedOptionDistance(selectedDistance);
                    }}
                />


                {/* <select class="select2" value={selectedOptionDistance} onChange={handleChange5}>
<option class="slide" value=""><b>בחר מרחק מקסימלי לאטרקציות</b></option>
<option class="slide" value="15000">עד 15 ק"מ</option>
<option class="slide" value="30000">עד 30 ק"מ</option>
<option class="slide" value="50000">עד 50 ק"מ</option>
<option class="slide" value="70000">עד 70 ק"מ</option>
</select> */}
                {submitted && !isDistanceValid && <p class="dicValid" >נא להזין מרחק מקסימלי</p>}
            </div>
            <br></br>
            <br></br>



            <span></span><h7> בחר אטרקציות עבור:</h7>

            <div>
                {options.map(option => (
                    <label key={option.value}>

                        <input
                            class="radioPop"
                            type="radio"
                            name="options"
                            value={option.value}
                            checked={selectedPop === option.value}
                            onChange={handleChangePop}
                            onBlur={() => setPopTouched(true)}

                        />
                        {option.label}
                    </label >
                ))}
            </div>
            <br></br>
            {submitted && !isPopValid && <p class="popValid" >נא להזין אוכלוסיית יעד</p>}

            <span class="required"></span> בחר את סוגי האטרקציות:

            {categoriesPreferences.map(({ name }, index) => {
                return (

                    <div className="checkbox">
                        <input
                            type="checkbox"
                            class="attOptions"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{name} </label>
                    </div>
                );
            })}
            <br></br>
            {submitted && !isCategoryalid && <p class="popValid" >נא להזין סוגי אטרקציות</p>}
            <ToastContainer />

            <div>
                <ButtonContainer>

                    <Buttonf content="צור טיול" onClick={handleClick} >  </Buttonf>
                </ButtonContainer>

            </div>
        </div>
        </MainContainer>
    </div>
</Form>
</html>
</div>