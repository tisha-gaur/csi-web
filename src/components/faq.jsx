import React, { useState } from 'react';
import faqData from '../data/faqData';
import star2 from '../assets/star2.png';
import star3 from '../assets/star3.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
    const [selectedCategory, setSelectedCategory] = useState('Program Overview');
    const [expandedQuestion, setExpandedQuestion] = useState(null);
    const [expandedCategory, setExpandedCategory] = useState('Program Overview');

    const toggleQuestion = (index) => {
        setExpandedQuestion((prev) => (prev === index ? null : index));
    };

    const toggleCategory = (category) => {
        setExpandedCategory((prev) => (prev === category ? null : category));
        setSelectedCategory(category);
        setExpandedQuestion(null); // Reset expanded question when switching categories
    };

    const renderQuestions = () => {
        return faqData[selectedCategory].map((item, index) => (
            <div key={index} className={`flex justify-start items-center gap-4 faq-left p-4 cursor-pointer border-b ${expandedQuestion === index ? 'bg-purple-100' : 'bg-white'}`}>
                <div className="flex items-center gap-3" onClick={() => toggleQuestion(index)}>
                    {expandedQuestion !== index && (
                        <img src={star3} className='lg:h-5 lg:w-5 h-3 w-3' alt="" />
                    )}
                </div>
                <div className="flex flex-col  gap-3" onClick={() => toggleQuestion(index)}>
                    <p className='lg:font-bold lg:text-lg text:md'>{item.question}</p>
                    {expandedQuestion === index && (
                        <p className='text-lg font-normal w-full'>{item.answer}</p>
                    )}
                </div>
            </div>
        ));
    };

    return (
        <div className="w-5/6 rounded-xl border min-h-fit lg:p-0 p-6 mx-auto mb-5">
            <div className="hidden lg:flex lg:flex-wrap lg:p-9 lg:justify-between">
                <div className="flex flex-col gap-3 w-2/5">
                    <p className='text-4xl font-semibold pb-10'>FAQs</p>
                    {Object.keys(faqData).map((category, index) => (
                        <p key={index}
                            className={`faq-left cursor-pointer font-semibold text-xl p-4 ${selectedCategory === category ? 'bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 text-white' : 'bg-white'}`}
                            onClick={() => setSelectedCategory(category)}>
                            {category}
                        </p>
                    ))}
                </div>

                <div className="flex flex-col gap-3 w-6/12">
                    <p className='text-4xl font-semibold pb-10'>Questions</p>
                    {renderQuestions()}
                </div>
            </div>

            <div className="lg:hidden">
                <p className='text-3xl font-semibold p-4'>FAQs</p>
                {Object.keys(faqData).map((category, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className={`p-4 rounded-md cursor-pointer border font-semibold text-xl flex justify-between items-center ${expandedCategory === category ? 'bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 text-white' : 'bg-white'}`}
                            onClick={() => toggleCategory(category)}
                        >
                            {category}
                            {expandedCategory === category ? <IoIosArrowUp className='cursor-pointer' /> : <IoIosArrowDown className='cursor-pointer' />}
                        </div>
                        {expandedCategory === category && (
                            <div className="mt-2 mb-1">
                                {renderQuestions()}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
