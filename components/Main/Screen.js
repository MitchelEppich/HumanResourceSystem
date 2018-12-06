import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faInfo,
  faAngleLeft,
  faAngleDown,
  faUser,
  faAngleUp,
  faAngleRight,
  faStickyNote,
  faTimes,
  faEye,
  faReply
} from "@fortawesome/free-solid-svg-icons";
import { onError } from "../../node_modules/apollo-link-error";

const Screen = props => {
  

  //        <span 
  //           onClick={()=>{
  //             props.setVisibleScreen(props.misc.visibleScreen.includes("noteBy") ? ["itemized"] : ["noteBy", "itemized"])
  //           }}
  //             style={{
  //               borderRadius: "30%",
  //               width: "28px",
  //               height: "28px",
  //               marginTop: "4px",
  //               padding: "6px",
  //               fontSize: "17px",                
  //             }}
  //             className="flex justify-center bg-almost-white mr-4 hover:bg-white cursor-pointer"
  //           >
  //             <FontAwesomeIcon icon={faStickyNote} />
  //           </span>
              

  //           { props.misc.visibleScreen.includes("noteBy") ? 
  //           <div             
  //             style={{
  //               borderRadius: "10px",                
  //               overflow: "hidden",
  //               overflow: "hidden",                             
  //               zIndex: "100",
  //               boxShadow: "rgba(45, 45, 45, 0.19) 0px 2px 5px",
  //               marginRight: "5px"
  //             }}
  //             className="absolute bg-white pin-r pin-t w-550 h-550 mt-12">  
  //                 <div className="text-white p-2 text-center uppercase bg-blue-new">
  //                   <h3>Notes</h3>
  //                 </div>  
  //                 <div className="w-full mt-6 py-2 h-300 overflow-y-auto">
  //                   <div style={{marginTop: "35px"}} className="inline-flex w-full absolute pin-l pin-t p-1 bg-grey-darker uppercase text-white text-sm">
  //                       <div className="w-1/5 pl-8 text-left">User</div>
  //                       <div className="w-3/5 text-left">Message</div>                      
  //                       <div className="w-1/5 text-center">Date</div>                      
  //                   </div>
                    
  //                   <div className="w-full mt-1">
  //                       <div className="inline-flex w-full flex py-3 bg-grey-light">
  //                         <div className="w-1/5 text-left pl-6">
  //                             mitch
  //                         </div>
  //                         <div className="w-3/5 text-left">
  //                             Please, verify this order.
  //                         </div>
  //                         <div className="w-1/5 text-left pl-2">
  //                             04/12 - 14:02
  //                         </div>
  //                       </div>
  //                   </div>                    
                    
  //                 </div>
  //                 <div className="w-full h-200 mt-4 p-2">
  //                   <div className="w-full px-8">
  //                     <textarea style={{border:"2px solid #cecece"}} rows="5" cols="40" className="w-full mr-2"/>
  //                   </div>
  //                   <div className="w-full px-8">
  //                       <div className="bg-blue-new p-2 text-white text-center uppercase">Send</div>
  //                   </div>
  //                 </div>
  //           </div> : null }

  


  return (
    <div
      style={{
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        overflow: "hidden",
        overflow: "hidden",
        background: "whitesmoke",
        boxShadow: "0px 0px 10px #cecece",       
      }}
      className="w-newScreen bg-white z-50 h-1100 mt-16 align-absolute">     
        <div class="w-full bg-grey-new text-center uppercase text-white p-2">
            <h3>Admin Complaints</h3>
        </div>
        <div className="inline-block w-full bg-white text-black overflow-y-auto">
              <div style={{marginTop: "35px"}} className="inline-flex w-full absolute pin-l pin-t p-1 bg-orange-new uppercase text-white text-sm">

                  <div style={{ width: "17%" }} className="w-1/4 pl-8">
                    Author
                  </div>
                  <div style={{ width: "13%" }} className="w-1/4 text-center">
                    Date
                  </div>                  
                  <div style={{ width: "45%" }} className="w-1/4 text-center">
                    Preview Message 
                  </div>
                  <div style={{ width: "15%" }} className="w-1/4 text-center">
                    Status
                  </div>
                  <div style={{ width: "10%" }} className="w-1/4 pl-8">
                    Action
                  </div>
              </div>         
              <div style={{marginTop: "35px"}} className="inline-flex w-full p-1 bg-grey-light text-grey mt-1 flex items-center ">
                  <div style={{ width: "17%" }} className="w-1/4 pl-4">
                    Jimmy Bob
                  </div>
                  <div style={{ width: "13%" }} className="w-1/4 text-center">
                    04/12/18 - 09:40
                  </div>                  
                  <div style={{ width: "45%" }} className="w-1/4 pl-24">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis... 
                  </div>
                  <div style={{ width: "15%" }} className="w-1/4 pl-4">
                    <select className="w-full">
                        <option value="processed">Processed</option>
                        <option value="awaiting">Awaiting</option>
                        <option value="analysis">In analysis</option>
                    </select>
                  </div>
                  <div style={{ width: "10%" }} className="w-1/4 pl-4 inline-flex text-center">
                      <div 
                      onClick={()=>{
                                    props.setVisibleScreen(props.misc.visibleScreen.includes("complainFile") ? ["admin"] : ["complainFile", "admin"])
                                  }}
                      className="w-10 h-10 bg-semi-transparent p-2 mr-2 cursor-pointer hover:bg-grey-new hover:text-white">
                        <FontAwesomeIcon icon={faEye} className="fa-lg " />
                      </div>
                      <div className="w-10 h-10 bg-semi-transparent p-2 cursor-pointer hover:bg-grey-new hover:text-white">
                        <FontAwesomeIcon icon={faTimes} className="fa-lg " />
                      </div>  
                  </div>
              </div>         
          </div>

          { props.misc.visibleScreen.includes("complainFile") ? 
            <div             
              style={{
                borderRadius: "10px",                
                overflow: "hidden",
                overflow: "hidden",                             
                zIndex: "100",
                boxShadow: "rgba(45, 45, 45, 0.19) 0px 2px 5px",                
              }}
              className="absolute bg-white pin-r pin-t w-full h-full">  
                  
                  <div className="inline-flex bg-grey-new w-full flex items-center">
                      <div
                        onClick={() => {
                            props.setVisibleScreen(null);
                            props.clearItem();
                        }}
                        className="w-1/3 h-10 inline-flex bg-grey-new"
                        >
                        <h4 className="p-2 text-white uppercase text-lg bg-orange-new flex items-center hover:bg-semi-transparent text-grey cursor-pointer">
                            <FontAwesomeIcon icon={faAngleLeft} className="fa-2x mr-4" />
                            Back
                        </h4>
                    </div>                  
                    <div className="text-white p-2 w-1/3 text-center bg-grey-new uppercase ">
                      <h3 className="">Complaint #001</h3>
                    </div>                      
                    <div className="text-white h-10 w-1/3 text-right bg-grey-new uppercase ">
                        <span 
                        onClick={()=>{
                          props.setVisibleScreen(props.misc.visibleScreen.includes("noteBy") ? ["complainFile", "admin" ] : ["noteBy", "complainFile", "admin"])
                        }}
                          style={{
                            borderRadius: "30%",
                            width: "28px",
                            height: "28px",
                            marginTop: "4px",
                            padding: "6px",
                            fontSize: "17px",                
                          }}
                          className="flex justify-center text-grey float-right bg-almost-white mr-4 hover:bg-white cursor-pointer"
                        >
                          <FontAwesomeIcon icon={faStickyNote} />
                        </span>
                    </div>                      
                  </div> 
                  <div className="w-full mt-6 py-2 px-6 overflow-y-auto"> 
                        <div className="w-full bg-grey-new uppercase text-white text-center p-2">
                            <h4>Reporter by:</h4>
                        </div> 
                    <div className="w-full mt-1">
                        <div className="inline-flex w-full mt-1 flex py-3 bg-grey-lighter">
                          <div className="w-1/3 text-left pl-4 ">
                              <p className="uppercase font-bold">Name: <span className="pl-2 font-normal"> Johnny Bravo</span></p>
                          </div>
                          <div className="w-1/3 text-left pl-4">
                              <p className="uppercase font-bold">Email: <span className="pl-2 font-normal"> jhowdoe@gmail.com</span></p>
                          </div>                          
                          <div className="w-1/3 text-left pl-4">
                              <p className="uppercase font-bold">Submitted on: <span className="pl-2 font-normal"> 04/12/2018 - 15:12:33</span></p>
                          </div>                          
                        </div>
                    </div> 
                  </div>

                  { props.misc.visibleScreen.includes("noteBy") ? 
                  <div             
                    style={{
                      borderRadius: "10px",                
                      overflow: "hidden",
                      overflow: "hidden",                             
                      zIndex: "100",
                      boxShadow: "rgba(45, 45, 45, 0.19) 0px 2px 5px",
                      marginRight: "5px"
                    }}
                    className="absolute bg-white pin-r pin-t w-550 h-550 mt-12">  
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
                                    mitch
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
                  </div> : null }

                  <div className="w-full mt-6 py-2 px-6 overflow-y-auto"> 
                        <div className="w-full bg-grey-new uppercase text-white text-center p-2">
                            <h4>Reported:</h4>
                        </div> 
                    <div className="w-full mt-1">
                        <div className="inline-flex w-full flex mt-1 py-3 bg-grey-lighter">
                          <div className="w-1/3 text-left pl-4 ">
                              <p className="uppercase font-bold">Date: <span className="pl-2 font-normal"> 01/12/2018</span></p>
                          </div>
                          <div className="w-1/3 text-left pl-4">
                              <p className="uppercase font-bold">Hour: <span className="pl-2 font-normal"> not informed </span></p>
                          </div>                          
                          <div className="w-1/3 text-left pl-4">
                              <p className="uppercase font-bold">Location: <span className="pl-2 font-normal"> CSR Depart.</span></p>
                          </div>                          
                        </div>                        
                        <div className="inline-flex w-full flex py-3  mt-2 bg-grey-lighter">
                          <div className="w-1/3 text-left pl-4 ">
                              <p className="uppercase font-bold">Reported Parties: <span className="pl-2 font-normal"> Mitchel Eppich</span>
                              </p>
                          </div>
                          <div className="w-1/3 text-left pl-4">
                              <p className="uppercase font-bold">Witnesses: <span className="pl-2 font-normal"> Jhowdoe </span></p>
                          </div>                       
                        </div>
                        <div className="inline-flex w-full flex py-3  mt-2 bg-grey-lighter">
                          <div className="w-full text-left px-4 inline-flex">
                              <div className="w-32">
                                  <p className="uppercase font-bold">Description:</p>
                              </div>
                              <div className="w-full">
                                  <p className="font-normal text-justify px-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p>
                              </div>
                          </div>               
                        </div>
                  </div>  
                </div>


                <div className="w-full py-2 mt-6 px-6 overflow-y-auto"> 
                    <div className="w-full bg-grey-new uppercase text-white text-center p-2">
                        <h4>Additional Information:</h4>
                    </div> 
                    <div className="inline-flex w-full flex py-3 mt-2 bg-grey-lighter">
                      <div className="w-full text-left px-4 inline-flex">
                          <div className="w-32">
                              <p className="uppercase font-bold">Description:</p>
                          </div>
                          <div className="w-full">
                              <p className="font-normal text-justify px-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p>
                          </div>
                      </div>               
                    </div>
                  </div>
                <div className="w-full py-2 mt-6 px-6 overflow-y-auto"> 
                    <div className="w-full bg-grey-new uppercase text-white text-center p-2">
                        <h4>Proposed Action:</h4>
                    </div> 
                    <div className="inline-flex w-full flex py-3 mt-2 bg-grey-lighter">
                      <div className="w-full text-left px-4 inline-flex">
                          <div className="w-32">
                              <p className="uppercase font-bold">Description:</p>
                          </div>
                          <div className="w-full">
                              <p className="font-normal text-justify px-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </p>
                          </div>
                      </div>               
                    </div>
                  </div>



                  <div className="w-full py-2 mt-6 px-6 overflow-y-auto"> 
                      <div className="w-full bg-grey-new uppercase text-white text-center p-2">
                          <h4>Admin Actions:</h4>
                      </div>       
                    <div className="text-grey p-2 flex justify-end items-center w-full inline-flex bg-grey-light uppercase mt-2">
                        <p className="pl-2 font-bold">Status:</p>
                        <select className="w-100 ml-4">
                          <option value="processed">Processed</option>
                          <option value="awaiting">Awaiting</option>
                          <option value="analysis">In analysis</option>
                        </select>
                      </div>
                    <div className="w-full pin-b h-200 mt-4 p-2">
                      <div className="w-full px-8">
                        <textarea style={{border:"2px solid #cecece"}} rows="5" cols="40" className="w-full mr-2"/>
                      </div>
                      <div className="w-full px-8">
                          <div className="bg-orange-new p-2 text-grey text-center uppercase hover:bg-grey-new hover:text-white cursor-pointer text-lg font-bold">Answer</div>
                      </div>
                    </div>
                  </div>
            </div> : null }
    
    </div>
  );
};

export default Screen;
