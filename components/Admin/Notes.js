import React from "react"

const Notes = props => {
    return (
        <div             
        style={{
            borderRadius: "10px",                
            overflow: "hidden",                                              
            zIndex: "100",  
            marginRight: "5px"
        }}
        className="absolute bg-white pin-r pin-t w-550 h-550 mt-10">  
            <div className="text-white p-2 text-center uppercase bg-orange-new">
                <h3>Notes</h3>
            </div>  
            <div className="w-full mt-6 py-2 h-300 overflow-y-auto">
                <div style={{marginTop: "35px"}} className="inline-flex w-full absolute pin-l pin-t p-1 bg-grey-new uppercase text-white text-sm">
                    <div className="w-1/5 pl-8 text-left">User</div>
                    <div className="w-3/5 text-left">Message</div>                      
                    <div className="w-1/5 text-center">Date</div>                      
                </div>
                
                <div className="w-full mt-1">
                    <div className="inline-flex w-full flex py-3 bg-grey-light">
                    <div className="w-1/5 text-left pl-6">
                        Mitch
                    </div>
                    <div className="w-3/5 text-left">
                        Please, verify this order.
                    </div>
                    <div className="w-1/5 text-left pl-2">
                        04/12 - 14:02
                    </div>
                    </div>
                </div>                    
                
            </div>
            <div className="w-full h-200 mt-4 p-2">
                <div className="w-full px-8">
                <textarea style={{border:"2px solid #cecece"}} rows="5" cols="40" className="w-full mr-2"/>
                </div>
                <div className="w-full px-8">
                    <div className="bg-grey-new cursor-pointer p-2 text-white text-center uppercase hover:bg-orange-new hover:text-grey">Send</div>
                </div>
            </div>
        </div>
    )
}


export default Notes