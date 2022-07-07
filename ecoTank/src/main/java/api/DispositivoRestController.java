package api;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DispositivoRestController {
    
    // Injeccion de dependencias
    @Autowired
    DispositivoService  dispositivoService;
    // Metodo que devuelva una lista de dispositivos

    // Metodo que devuelva lista de plantas asociadas a dispositivos



}
