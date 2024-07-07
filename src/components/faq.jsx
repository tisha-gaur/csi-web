import React, { useState } from 'react';
import faqData from '../data/faqData'; // Adjust the path as necessary
import star2 from '../assets/star2.png';
import star3 from '../assets/star3.png';

const Faq = () => {
    const [selectedCategory, setSelectedCategory] = useState('Program Overview');
    const [expandedQuestion, setExpandedQuestion] = useState(0);

    const toggleQuestion = (index) => {
        setExpandedQuestion((prev) => (prev === index ? null : index));
    };

    const renderQuestions = () => {
        return faqData[selectedCategory].map((item, index) => (
            <div key={index} className={`flex justify-start items-start  gap-4 faq-left p-8 cursor-pointer  ${expandedQuestion === index ? 'bg-purple-100' : 'bg-white'}`}>
                <div className="flex items-center gap-3 " onClick={() => toggleQuestion(index)}>
                    <img src={expandedQuestion === index ? star2 : star3} className='h-5 w-5' alt="" />
                </div>
                <div className="flex flex-col gap-3" onClick={() => toggleQuestion(index)}>
                    <p className='font-bold text-lg'>{item.question}</p>
                    {expandedQuestion === index && (
                        <p className='text-lg font-normal w-4/5'>{item.answer}</p>
                    )}
                </div>
            </div>
        ));
    };

    return (
        <div>
            <div className="w-5/6 rounded-xl border min-h-fit mx-auto mb-5">
                <div className="flex flex-wrap p-9 justify-between ">
                    <div className="flex flex-col gap-3 w-2/5">
                        <p className='text-4xl font-semibold pb-10'>FAQs.</p>
                        {Object.keys(faqData).map((category, index) => (
                            <p key={index}
                                className={`faq-left cursor-pointer font-semibold text-xl ${selectedCategory === category ? 'bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 text-white' : 'bg-white'}`}
                                onClick={() => setSelectedCategory(category)}>
                                {category}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-col r gap-3 w-6/12">
                        <p className='text-4xl font-semibold pb-10'>Questions.</p>
                        {renderQuestions()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
