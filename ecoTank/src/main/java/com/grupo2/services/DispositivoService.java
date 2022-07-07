package com.grupo2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.grupo2.repositories.DispositivoRepository;
@Service
public class DispositivoService {
    @Autowired
    DispositivoRepository dispositivoRepository;
}
