package com.example.art4.repositorios;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.art4.modelos.Obra;
import java.util.List;
import java.util.Optional;


@Repository
public interface IObraRepositorio extends JpaRepository<Obra, UUID> {

    Optional<Obra> findByTitulo(String titulo);

    Optional<Obra> findByAutor(String autor);

    
}
