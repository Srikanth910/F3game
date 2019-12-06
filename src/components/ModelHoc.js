import  React,{compoennt, Component} from 'react';
import Gamef3 from './Gamef3';


 const  ModelHoc=(Wrappedcomponent)=>{
     return class ModelHoc extends Component{
         constructor(props) {
             super(props)
         
             this.state = {
                //   showModal:true
             }
         }
         
    

         componentWillMount(){
             this.getInitialState();
         }
        
    getInitialState() {
        return {
            showModal: false,


        };
    }


        render(){
            return(
                <div>
                    <Wrappedcomponent  showModal={this.getInitialState}/>
<Gamef3  open={this.state.showModal}/>

                </div>

            )
        }
     }
 }

export  default ModelHoc