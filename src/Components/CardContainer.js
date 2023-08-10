import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const CardContainer = ({ book }) => {

const [show, setShow] = useState(false);
const [bookItem, setBookItem] = useState()

  return (
    <>
      {book.map((item, idx) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
                <div key={idx} className="card" onClick={()=>{setShow(true);setBookItem(item)}}>
                <img src={thumbnail} alt="" />
                <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <p className="amount">&#8377;{amount}</p>
                </div>
                </div>
                <ModalContainer show={show} item={bookItem} onClose={()=>setShow(false)}/>
            </> 
          );
        }
      })}
    </>
  );
};

export default CardContainer;
