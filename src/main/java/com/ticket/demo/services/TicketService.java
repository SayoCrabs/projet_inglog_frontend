package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import com.ticket.demo.model.Ticket;

public interface TicketService {

	List<Ticket> getTickets();

	void updateTicket(String id, Ticket ticket);

	void deleteTicket(Integer id);

	void createTicket(Ticket ticket);

	List<Ticket> searchTicketByTitle(String title);

	Optional<Ticket> findById(Integer id);
}
