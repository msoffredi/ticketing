import React from 'react';
import Link from 'next/link';

// const LandingPage = ({ _currentUser, tickets }) => {
const LandingPage = ({ tickets }) => {
    const ticketList = tickets.map((ticket) => {
        return (
            <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.price}</td>
                <td>
                    <Link
                        href="/tickets/[ticketId]"
                        as={`/tickets/${ticket.id}`}
                    >
                        <a>View</a>
                    </Link>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h1>Tickets v2</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>{ticketList}</tbody>
            </table>
        </div>
    );
};

//LandingPage.getInitialProps = async (_context, client, _currentUser) => {
LandingPage.getInitialProps = async (_context, client) => {
    const { data } = await client.get('/api/tickets');

    return { tickets: data };
};

export default LandingPage;
