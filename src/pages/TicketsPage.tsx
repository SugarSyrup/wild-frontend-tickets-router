import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import TicketList from "../components/TicketList";
import TicketForm from "../components/TicketForm";

export default function TicketsPage() {
  return (
    <>
      <ErrorBoundary fallback={<div>Error!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
      <TicketForm />
    </>
  );
}
