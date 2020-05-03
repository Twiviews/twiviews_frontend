import React, {useState} from 'react';
import {
    Card
  } from 'reactstrap';
import 'simplebar';
import 'simplebar/dist/simplebar.css';


const Panel = () => {
    const initialState = {
        parentLinks: [
                        {id:1,linkName:'Home',class:'fa fa-home shadow-lg'},
                        {id:2,linkName:'Explore',class:'fa fa-hashtag shadow-lg'},
                        {id:3,linkName:'Notifications',class:'fa fa-bell shadow-lg'}
                    ]
    }

    const [links, setLinks] = useState(initialState);

    const elements = links.parentLinks.map((listData)=>{
       return ( <div key={listData.id}>
            <a href="#">
                <i className={listData.class}></i>
                <span>{listData.linkName}</span>
            </a>    
        </div>)
    })

    return (
        <Card className="parentPanel" >
            {elements}
        </Card>
    )
}

export default Panel;
