import React, {Component} from 'react';
import axios from 'axios';
import SingleRest from './SingleRest';

class Restaurant extends Component{
        constructor(props){
            super(props)
            
            this.state = {
                restdata: this.props.restData,
                editing: false,
                original: '',
                originalA: '',
                originalC: '',
                originalU: '',
                originalI: ''
            }
            
            this.displayFullRest = this.displayFullRest.bind(this);
        }
        

    //replaces input field with div when you hit the cancel button

    newHandleCancel(id, test){
            var name = document.querySelector('#'+test);
            var div = document.createElement('div');
            var img = document.createElement('img');
            var span = document.createElement('span');
            span.id = test;
            div.id = test;
            if (test === 'b'+id){
                div.className = 'r-section r-name'
                name.replaceWith(div);
                div.innerHTML = this.state.original;
            } else if (test === 'c'+id){
                div.className = 'r-section r-address'
                name.replaceWith(div);
                div.innerHTML = this.state.originalA;
            } else if (test === 'd'+id){
                div.className = 'r-section r-cuisine'
                name.replaceWith(div);
                div.innerHTML = this.state.originalC;
            } else if (test === 'e'+id){
                name.replaceWith(span);
                span.innerHTML = this.state.originalI;
                span.className = "hidden";
            }
        
    }
    
        // sets edit state to false

        handleCancel(id, test, c, d,e) {
            this.newHandleCancel(id, test)
            this.newHandleCancel(id, c)
            this.newHandleCancel(id, d)
            this.newHandleCancel(id,e)
            // this.newHandleCancel(id, f)
            this.setState({ editing: false })
        }
        
        // sets edit state to true
        
        handleEdit() { this.setState({ editing: true })}

        // shows different buttons depending on edit state

        renderButtons() {
            if(this.state.editing){
                return(
                    <div>
                        <button id="btn-save" onClick={()=>this.editEntry(this.props.idr, 'b'+this.props.idr, 'c'+this.props.idr, 'd'+this.props.idr, 'e'+this.props.idr)}>Save</button>
                        <button onClick={()=>this.handleCancel(this.props.idr, 'b'+this.props.idr, 'c'+this.props.idr, 'd'+this.props.idr, 'e'+this.props.idr)}>Cancel</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <button id="btn-edit" onClick={()=>this.startEntry(this.props.idr)}>Edit</button>
                        <button id="btn-delete" onClick={()=> this.deleteRest(this.props.idr)} type="button">Delete</button>
                    </div>
                )
            }
        }
        
        // replaces input with divs
        
        newEntry(id, test){
        var b = document.querySelector('#b'+id).value;
        var c = document.querySelector('#c'+id).value;
        var d = document.querySelector('#d'+id).value;
        var e = document.querySelector('#e'+id).value;
        var name = document.querySelector('#'+test);
        var div = document.createElement('div');
        var span = document.createElement('span');
        div.id = test;
        span.id = test;
        if (test === 'b'+id){
                div.className = 'r-section r-name'
                div.innerHTML = b;
                name.replaceWith(div);
                // console.log(j)
            } else if (test === 'c'+id){
                div.className = 'r-section r-address'
                name.replaceWith(div);
                div.innerHTML = c;
            } else if (test === 'd'+id){
                div.className = 'r-section r-cuisine'
                name.replaceWith(div);
                div.innerHTML = d;
            } else if (test === 'e'+id){
                span.innerHTML = e;
                name.replaceWith(span);
                if(span.innerHTML !== this.state.originalI){
                    document.querySelector('#a'+ id).remove();
                }
            }
   }

   // does the axios post

   editEntry = (id,b,c,d,e) =>{

        var name = document.querySelector('#b'+id).value;
        var address = document.querySelector('#c'+id).value;
        var cruisine = document.querySelector('#d'+id).value;
        var idr = document.querySelector('#e'+id).value;
        var url = this.state.originalU

        if (name === '' || address === '' || cruisine === '' || url === ''){
            return alert('no empty fields!')
        }

        axios.put('https://hiddeneateries.herokuapp.com/' + id, {
          name: name,
          address: address,
          cuisine: cruisine,
          borough_id: idr,
          image: url
        })
        this.newEntry(id,b)
        this.newEntry(id,c)
        this.newEntry(id,d)
        this.newEntry(id,e)
        this.setState({ editing: false })
   }
    
   // replaces divs with input to allow changes

    startEntry = (id) => {
    this.handleEdit()
        var value = document.querySelector('#b'+id).innerHTML;
        this.setState({original:value})
        var valueA = document.querySelector('#c'+id).innerHTML;
        this.setState({originalA:valueA})
        var valueC = document.querySelector('#d'+id).innerHTML;
        this.setState({originalC:valueC})
        var valueI = document.querySelector('#e'+id).innerHTML;
        this.setState({originalI:valueI})
        var valueU = document.querySelector('#img'+id).src;
        this.setState({originalU:valueU})
        var name = document.querySelector('#b'+id);
        var address = document.querySelector('#c'+id);
        var cuisine = document.querySelector('#d'+id);
        var idr = document.querySelector('#e'+id);
        // var url = document.querySelector('#f'+id);
        var input = document.createElement('input');
        var inputAddress = document.createElement('input');
        var inputCuisine = document.createElement('input');
        var inputIdr = document.createElement('select');
        var man = document.createElement('option');
        man.value = 3;
        man.innerHTML = 'Manhattan';
        inputIdr.appendChild(man);
        var bronx = document.createElement('option');
        bronx.value = 1;
        bronx.innerHTML = 'Bronx';
        var queens = document.createElement('option');
        queens.value = 4;
        queens.innerHTML = 'Queens'
        var brooklyn = document.createElement('option');
        brooklyn.value = 2;
        brooklyn.innerHTML = 'Brooklyn'
        var staten = document.createElement('option');
        staten.value = 5;
        staten.innerHTML = 'Staten Island'
        inputIdr.appendChild(bronx);
        inputIdr.appendChild(queens);
        inputIdr.appendChild(brooklyn);
        inputIdr.appendChild(staten);
        // var inputUrl = document.createElement('input');
        input.id = 'b'+id;
        inputAddress.id = 'c'+id;
        inputCuisine.id = 'd'+id;
        inputIdr.id = 'e'+id;
        // inputUrl.id = 'f'+id;
        inputAddress.className = 'r-section r-address r-edit-input';
        inputCuisine.className = 'r-section r-cuisine r-edit-input';
        inputIdr.className = 'r-edit-input'
        // inputUrl.className = 'r-section r-image';
        input.className = 'r-section r-name r-edit-input';
        input.value = value;
        inputAddress.value = valueA;
        inputCuisine.value = valueC;
        // inputUrl.value = valueU;
        inputIdr.value = valueI;
        address.replaceWith(inputAddress);
        name.replaceWith(input);
        cuisine.replaceWith(inputCuisine);
        idr.replaceWith(inputIdr);
        // url.replaceWith(inputUrl);
    }

    
    
    
    deleteRest = (id) => {
        let test = window.confirm('Are you sure? :wink: ');
        if (test === true){
            axios.delete('https://hiddeneateries.herokuapp.com/' + id)
        document.querySelector('#a'+ id).remove();
        }  else {
            return
        }
        
   }
    
    displayFullRest = (e) => {
        let current = e.target.dataset.id;
        let r_modal = [];
        document.querySelectorAll('.r_modal').forEach((el) =>{
            if(current === el.id){
                r_modal.push(el);
            }
        })
        r_modal[0].style.opacity = '1';
        r_modal[0].style['pointer-events'] = 'auto';   
    }
    
    closeFullRest = (e) => {
        let current = e.target.dataset.id;
        
        let r_modal = [];
        document.querySelectorAll('.r_modal').forEach((el) =>{
            if(current === el.id){
                r_modal.push(el);
            }
        })
        r_modal[0].style.opacity = '0';
        r_modal[0].style['pointer-events'] = 'none';   
    }
    
    
   
   render(){
       return(
        <div>
            <div id={'a'+ this.props.idr} className="r-row">
                <div id={'f'+this.props.idr} className="r-section r-image" onClick={(event) => this.displayFullRest(event)}><img data-id={"_" +this.props.idr} id={'img'+this.props.idr} src={this.props.image} /></div>
                <div id={'b'+this.props.idr} className="r-section r-name">{this.props.name}</div>
                <div id={'d'+this.props.idr} className="r-section r-cuisine">{this.props.cuisine}</div>
                <div id={'c'+this.props.idr} className="r-section r-address">{this.props.address}</div>
                <span className='hidden' id={'e'+this.props.idr}>{this.props.bID}</span>
                <div className="edit-buttons">{this.renderButtons()}</div>
            </div>
            <div id={'_' +this.props.idr} className="r_modal">
                <SingleRest name={this.state.restdata.name} cuisine={this.state.restdata.cuisine} image={this.state.restdata.image} address={this.state.restdata.address} close={(e) => this.closeFullRest(e)} m_id={this.state.restdata.idr}/>
            </div>
        </div>
        )
   }

   
}

export default Restaurant;
