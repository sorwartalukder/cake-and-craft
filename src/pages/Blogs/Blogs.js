import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import Header from '../shared/Header/Header';

const Blogs = () => {
    useSetTitle('Blogs - Cake & Craft')

    return (
        <div>
            <Header></Header>

            <div className='services-container pt-20 min-h-screen'>
                <Question
                    question="1 Difference between SQL and NoSQL?"
                    ans="SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. "  >
                </Question>
                <Question question="2 What is JWT, and how does it work?" ans="JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. JWt is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). Is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. ">
                </Question>
                <Question question="3 What is the difference between javascript and NodeJS?" ans="NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. ">
                </Question>
                <Question question="4 How does NodeJS handle multiple requests at the same time?" ans="NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. ">
                </Question>
            </div>

        </div>
    );
};

const Question = ({ question, ans }) => {
    return (
        <div className='mt-8'>
            <h3 className='text-3xl font-semibold'>{question}</h3>
            <p className='text-xl'>{ans}</p>
        </div>
    );
};


export default Blogs;