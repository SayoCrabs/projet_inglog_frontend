package com.ticket.demo.services;

import java.util.List;
import java.util.Optional;

import com.ticket.demo.model.User;

public interface UserService {

	void updateUser(User user);

	void deleteUser(int id);

	void createUser(User user);

	List<User> getUsers();

	Optional<User> findById(Integer id);

}
