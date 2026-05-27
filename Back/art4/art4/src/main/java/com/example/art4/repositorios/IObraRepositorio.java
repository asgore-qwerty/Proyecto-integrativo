package com.example.art4.repositorios;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.art4.modelos.Obra;

@Repository
public interface IObraRepositorio extends JpaRepository<Obra, UUID> {

    list<Obra>

}
