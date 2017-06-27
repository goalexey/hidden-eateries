import React from 'react';
import axios from 'axios';

function Header (props){
    
    
    const openFModal = () => {
        let modal = document.querySelector('#f-modal');
        modal.style.opacity = "1";
        modal.style['pointer-events'] = "auto";
    }
    
    const closeFModal = () => {
        let modal = document.querySelector('#f-modal');
        modal.style.opacity = "0";
        modal.style['pointer-events'] = "none";
        
    }

   const createEntry = function(){
        var name = document.querySelector('#inputName').value;
        var address = document.querySelector('#inputAddress').value;
        var cuisine = document.querySelector('#inputCuisine').value;
        var id = document.querySelector('select').value;
        var url = document.querySelector('#inputImage').value;

        if (name === '' || address === '' || cuisine === '' || url === ''){
            return alert('no empty fields!')
        }
        
        axios.post('https://hiddeneateries.herokuapp.com/', {
          name: name,
          address: address,
          cuisine: cuisine,
          image: url,
          borough_id: id,
        })
        console.log(name);
        document.querySelector('#inputName').value = '';
        document.querySelector('#inputAddress').value = '';
        document.querySelector('#inputCuisine').value = '';
        document.querySelector('#inputImage').value = '';
        
        closeFModal();
    }



   return(
        <div className="head-title">

            <div  className="create-entry" onClick={() => openFModal()}>Create Entry</div>

            <div id="f-modal">
                <div id="f-modal-div">
                    <div className="x-div">
                        <div className="x" id="closeFM" onClick={() => closeFModal()}>
                            <div className="x-l"></div>
                            <div className="x-r"></div>
                        </div>
                    </div>
                    <input id='inputName' className="fpif" placeholder='Name'/>
                    <input id='inputAddress' className="fpif" placeholder='Address'/>
                    <input id='inputCuisine' className="fpif" placeholder='Cuisine'/>
                    <input id='inputImage' className="fpif" placeholder='IMG URL'/>
                    <select className="fpif">
                        <option value="3">Manhattan</option>
                        <option value="1">Bronx</option>
                        <option value="4">Queens</option>
                        <option value="2">Brooklyn</option>
                        <option value="5">Staten Island</option>
                    </select>
                    <div onClick={() => createEntry()} className="f-submit">Submit Entry</div> 
                </div>
                <div onClick={() => closeFModal()} className="close-modal-area"></div>
            </div>

           <div className="title-div">
                Hidden Eateries NYC
                <div id="eat-logo">
                    <img  src="./images/logo_vector_chef.png" />
                </div>
            </div>

       </div>
    )
}

export default Header;