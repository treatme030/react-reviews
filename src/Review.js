import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

    // 인덱스가 배열의 처음과 끝일 경우, 연결하기
    const checkNumber = (number) => {
        if(number > people.length - 1){
            return 0
        }
        if(number < 0){
            return people.length - 1
        }
        return number
    }
    // 이전 페이지로 이동
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    // 다음 페이지로 이동
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    // 랜덤으로 리뷰 보기
    const randomPerson = () => {
        // 배열 길이 안에서만 랜덤으로 숫자 나옴
        let randomNumber = Math.floor(Math.random() * people.length)
        if(randomNumber === index){ // 계속 다른 인덱스가 나올 수 있게
            randomNumber++;
        }
        setIndex(checkNumber(randomNumber))
    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>suprise me</button>
        </article>
    );
};

export default Review;