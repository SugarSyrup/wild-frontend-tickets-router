import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchTicket, updateTicketStatus } from "../api";
import { Ticket } from "../types";

export default function TicketDetailPage() {
  const params = useParams();
  const [ticket, setTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    fetchTicket({ ticketId: params.id as string }).then((ticket) => {
      setTicket(ticket);
    });
  }, []);

  return (
    <div className="ticket-detail">
      {ticket && (
        <>
          <div className="title">{ticket.title}</div>
          <div className="description">{ticket.description}</div>
          <div
            className="status"
            onClick={() => {
              setTicket((prev) => {
                if (!prev) return prev;
                updateTicketStatus({
                  id: prev.id,
                  status: prev.status === "open" ? "closed" : "open",
                });
                return {
                  ...prev,
                  status: prev.status === "open" ? "closed" : "open",
                };
              });
            }}
          >
            {ticket.status}
          </div>
          <div className="comment-count">
            Comments: {ticket.comments.length}
          </div>
        </>
      )}
    </div>
  );
}
