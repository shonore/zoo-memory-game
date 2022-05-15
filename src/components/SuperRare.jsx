import React from 'react'
import Card from "./Card";
import koalaRare from "../assets/koalaRare.png";
import chickenRare from "../assets/chickenRare.png";
import deerRare from "../assets/deerRare.png";
import foxRare from "../assets/foxRare.png";

export default function SuperRare() {
    const data = [
        {
            image: koalaRare,
            series: "Rare",
            title: "Yogi-Bear",
            price: 2.99,
            tag: "zoo.near",
            time: 4,
            buyVisible: true
        },
        {
            image: chickenRare,
            series: "Epic",
            title: "Firefly Beige",
            price: 2.99,
            tag: "zoo.near",
            time: 5,
            buyVisible: true
        },
        {
            image: deerRare,
            series: "Mythical",
            title: "Deer Woody",
            price: 2.99,
            tag: "zoo.near",
            time: 12,
            buyVisible: true
        },
        {
            image: foxRare,
            series: "Rare",
            title: "Sly Foxie",
            price: 2.99,
            tag: "zoo.near",
            time: 9,
            buyVisible: true
        },
    ];

    return (
        <div className="super-rare">
            <div className="title-container">
                <h2 className="title">ZooMemory Rare Auction</h2>
                <p className="description">
                    We have released four limited edition NFT's early which can be
                    bid on via <a href="#">Paras</a>.
                </p>
            </div>
            <div className="cards">
                {data.map(({ image, series, title, price, tag, time, buyVisible }, index) => (
                    <Card
                        image={image}
                        series={series}
                        title={title}
                        price={price}
                        tag={tag}
                        time={time}
                        buyVisible={buyVisible}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
