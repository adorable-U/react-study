import React from 'react';
import Posting from "@/pages/Posting";

const Postings = () => {
    const Postings = [
        {
            id: 1,
            title: '새로운 기술 습득하기',
            subtitle: '신선한 물을 마시려면 먼저 컵에..',
            date: '2023.11.20'
        },
        {
            id: 2,
            title: '새로운 기술 습득하기2',
            subtitle: '신선한 물을 마시려면 먼저 컵에..',
            date: '2023.11.20'
        },
        {
            id: 3,
            title: '새로운 기술 습득하기3',
            subtitle: '신선한 물을 마시려면 먼저 컵에..',
            date: '2023.11.20'
        },
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-8">
                    {Postings.map(p => {
                        return <Posting key={p.id} title={p.title} subtitle={p.subtitle} date={p.date}/>
                    })}
                    <div className="clearfix">
                        <button className="btn btn-primary float-end" type="button">이전 포스팅 ⇒</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postings;