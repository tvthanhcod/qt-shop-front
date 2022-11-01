import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';

function ChiTiet() {

    let slug = useParams();
    const [lists, setList] = useState([]);


    const datas = [
        { id: 1, img: 'https://technext.github.io/ogani/img/product/discount/pd-5.jpg', Price: 100, color: 'Green' },
        { id: 2, img: 'https://technext.github.io/ogani/img/product/discount/pd-4.jpg', Price: 300, color: 'Black' },
        { id: 3, img: 'https://technext.github.io/ogani/img/product/discount/pd-3.jpg', Price: 100, color: 'Gray' },
        { id: 4, img: 'https://technext.github.io/ogani/img/product/discount/pd-6.jpg', Price: 400, color: 'Blue' },
        { id: 5, img: 'https://technext.github.io/ogani/img/product/discount/pd-2.jpg', Price: 200, color: 'white' },
        { id: 6, img: 'https://technext.github.io/ogani/img/product/discount/pd-1.jpg', Price: 250, color: 'Red' },
    ];

    useEffect(() => {
        datas.map((data) => {
            if (data.id == slug.slug) {
                setList([data])
            }
        })
    }, [])
    console.log(lists)
    return (
        <div>
            {lists.map((list) => (
                < img src={list.img} />

            ))}
        </div>
    )
}

export default ChiTiet