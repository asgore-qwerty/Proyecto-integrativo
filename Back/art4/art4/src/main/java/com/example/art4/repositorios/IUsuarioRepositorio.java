package com.example.art4.repositorios;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.art4.modelos.Usuario;

@Repository
public interface IUsuarioRepositorio extends JpaRepository<Usuario,UUID> {

    List<Usuario>findByNombres(String nombres);

    Optional<Usuario>findByCorreo(String email);

}
