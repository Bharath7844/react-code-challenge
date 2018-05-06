import React from 'react';
import { CompanyCard } from './CompanyCard';
import './styles.less';
export const CompaniesList = (props) => {
    // Return null if companies are not defined
    const { companies } = props;
    return (
        <section className="companies__wrapper section-container">
            <h3 className="section-heading">Companies</h3>
            <div className="cards__wrapper">
                {
                    companies.length === 0 ?
                        <span>There are currently no companies to review.</span>
                        :
                        companies.map((company, index) => {
                            const { id, name, address, revenue, phone } = company;
                            return <CompanyCard key={index} {...company} />
                        })
                }
            </div>
        </section>
    );
}

