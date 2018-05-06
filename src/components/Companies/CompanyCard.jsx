import React from 'react';
import { Link } from "react-router-dom";
export const CompanyCard = ({ id, name, address, revenue, phone }) => (
    <div className="card">
        <header>{name}</header>
        <div className="details">
            <label>Address:</label>
            <span>{address}</span>
        </div>
        <div className="details">
            <label>Revenue:</label>
            <span>{revenue}</span>
        </div>
        <div className="details">
            <label>Phone:</label>
            <span>{phone}</span>
        </div>
        <footer>
            <Link to={`details/${id}`}>Company Overview</Link>
        </footer>
    </div>
)