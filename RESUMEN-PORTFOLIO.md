# Arena - League of Legends Esports Platform

## Descripción del Proyecto

**Arena** es una plataforma web completa para la gestión y seguimiento de la escena competitiva de League of Legends. Permite a los usuarios consultar información sobre equipos profesionales, jugadores, partidas, estadísticas y competiciones, además de interactuar mediante comentarios y calificaciones.

## Tecnologías Utilizadas

### Backend
- **Laravel 10** (PHP 8.3) - Framework principal
- **MySQL** - Base de datos relacional
- **Laravel Breeze** - Sistema de autenticación
- **Laravel Sanctum** - Autenticación API
- **Guzzle HTTP** - Cliente HTTP para consumo de APIs externas

### Frontend
- **Blade Templates** - Motor de plantillas
- **Tailwind CSS** - Framework de estilos
- **Alpine.js** (vía Breeze) - Interactividad JavaScript
- **Vite** - Build tool

### Adicionales
- **Yajra DataTables** - Tablas de datos dinámicas
- **Laravel Breadcrumbs** - Navegación
- **Color Thief PHP** - Extracción de colores dominantes de imágenes

## Arquitectura de Base de Datos

### Entidades Principales (14 modelos)

#### Núcleo del Sistema
1. **Users** - Usuarios del sistema con equipos y jugadores favoritos
2. **Teams** - Equipos profesionales de esports
3. **Players** - Jugadores profesionales con información detallada
4. **Champions** - Campeones de League of Legends
5. **Roles** - Posiciones (Top, Jungle, Mid, ADC, Support)

#### Sistema de Competiciones
6. **Competitions** - Ligas y torneos (LEC, LCS, LCK, etc.)
7. **Series** - Series de partidas (BO1, BO3, BO5)
8. **Games** - Partidas individuales con resultados

#### Relaciones y Estadísticas
9. **player_team** - Historial de contratos (fechas, sustituciones)
10. **clasifications** - Estadísticas KDA por partida y campeón jugado
11. **Scores** - Calificaciones de usuarios a jugadores
12. **Comments** - Sistema de comentarios

#### Funcionalidades Adicionales
13. **Transfers** - Movimientos de jugadores entre equipos
14. **Predictions** - Sistema de predicciones de partidas

## Características Destacadas

### Modelado de Datos Complejo
- **Relaciones Many-to-Many**: Jugadores-Equipos, Jugadores-Partidas
- **Historial temporal**: Contratos con fechas de inicio, fin y expiración
- **Sistema de sustitutos**: Gestión de plantillas principales y secundarias
- **10 Foreign Keys por partida**: Para los bans (5 azul + 5 rojo)

### Funcionalidades Clave

#### Gestión de Equipos
- Plantillas actuales e históricas
- Verificación automática de conflictos de roles
- Sistema de sustitutos
- Estadísticas por temporada
- Rankings de equipos (más partidas, mejor winrate, más fans)

#### Gestión de Jugadores
- Pool de campeones (diversidad)
- Estadísticas KDA globales
- Historial de equipos
- Campeones más jugados
- Winrate por campeón
- Sistema de calificaciones por partida

#### Sistema de Partidas
- Resultados detallados (azul vs rojo)
- 10 jugadores con estadísticas individuales
- 10 bans por partida
- Vinculación a series (BO1, BO3, BO5)
- Sistema de comentarios

#### Características Sociales
- Usuarios con equipos favoritos
- Hasta 5 jugadores favoritos por usuario
- Sistema de comentarios en equipos, jugadores y partidas
- Calificaciones de jugadores con reseñas
- Rankings de popularidad

### Lógica de Negocio Compleja

```php
// Ejemplo: Obtener jugadores activos de un equipo en una fecha específica
public function getPlayersDate($date)
{
    return $this->players()
        ->where('start_date', '<=', $date)
        ->where('contract_expiration_date', '>=', $date)
        ->where(function ($query) use ($date) {
            $query->where('end_date', '>=', $date)
                ->orWhereNull('end_date');
        })
        ->orderBy('role_id', 'asc')
        ->get();
}

// Ejemplo: Calcular KDA de un jugador
public function getKDA()
{
    $totalKills = $this->getTotalKills();
    $totalAssists = $this->getTotalAssists();
    $totalDeaths = $this->getTotalDeaths();

    if ($totalDeaths == 0) {
        return ($totalKills + $totalAssists);
    } else {
        return ($totalKills + $totalAssists) / $totalDeaths;
    }
}
```

## Métricas del Proyecto

### Complejidad Técnica
- **14 modelos Eloquent** con relaciones complejas
- **27 migraciones** de base de datos
- **100+ métodos personalizados** en modelos
- **Queries SQL complejas** con subconsultas y joins
- **Gestión de fechas temporales** para contratos y plantillas

### Consultas Avanzadas Implementadas
- Rankings dinámicos (equipos más populares, jugadores con mejor KDA)
- Estadísticas agregadas (total kills, assists, deaths)
- Pool de campeones por jugador
- Winrate por campeón y equipo
- Verificación de plantillas en fechas específicas
- Detección automática de conflictos de roles

## Desafíos Técnicos Resueltos

1. **Gestión de Plantillas Históricas**: Sistema para consultar qué jugadores pertenecían a un equipo en cualquier fecha específica, considerando contratos, bajas y sustituciones.

2. **Sistema de Bans Complejo**: 10 relaciones foreign key por partida para gestionar los bans de campeones (5 por equipo).

3. **Estadísticas Agregadas**: Cálculo eficiente de KDA, pool de campeones, y winrates con queries optimizadas.

4. **Integridad Referencial**: Cascadas y validaciones para mantener consistencia entre equipos, jugadores, contratos y partidas.

5. **Rankings Dinámicos**: Queries complejas con subconsultas para generar rankings de popularidad, estadísticas y rendimiento.

## Habilidades Demostradas

### Backend
✅ Diseño de bases de datos relacionales complejas
✅ Modelado de relaciones many-to-many con datos adicionales
✅ Eloquent ORM avanzado (scopes, accessors, relaciones)
✅ Query Builder con subconsultas y joins
✅ Gestión de fechas y validaciones temporales
✅ Autenticación y autorización
✅ Arquitectura MVC

### Base de Datos
✅ Normalización de datos
✅ Diseño de relaciones complejas
✅ Índices y foreign keys
✅ Queries SQL optimizadas
✅ Migraciones versionadas

### Frontend
✅ Sistema de vistas con Blade
✅ Tailwind CSS responsive
✅ DataTables interactivas
✅ Formularios dinámicos

### Arquitectura
✅ Separación de responsabilidades
✅ Código reutilizable y mantenible
✅ Convenciones Laravel
✅ Gestión de dependencias (Composer)

## Estructura del Código

```
Arena/
├── app/
│   ├── Models/              # 14 modelos Eloquent
│   │   ├── Team.php         # 422 líneas - Lógica compleja de equipos
│   │   ├── Player.php       # 353 líneas - Gestión de jugadores
│   │   ├── Game.php         # 180 líneas - Sistema de partidas
│   │   └── ...
│   ├── Http/
│   │   ├── Controllers/     # Controladores
│   │   └── Middleware/      # Middleware personalizado
├── database/
│   ├── migrations/          # 27 archivos de migración
│   └── seeders/             # Seeders para datos iniciales
├── resources/
│   ├── views/               # Vistas Blade
│   └── css/                 # Estilos Tailwind
├── routes/
│   └── web.php              # Rutas de la aplicación
└── public/                  # Assets públicos
```

## Impacto y Alcance

- **Gestión completa** del ecosistema competitivo de League of Legends
- **Historial temporal** de más de 2 años de datos
- **Sistema escalable** preparado para múltiples competiciones y regiones
- **Interacción social** con comentarios y calificaciones
- **Rankings dinámicos** actualizados en tiempo real

## Conclusión

Arena demuestra competencia en el desarrollo de aplicaciones web complejas con Laravel, incluyendo diseño de bases de datos relacionales avanzadas, implementación de lógica de negocio compleja, y creación de interfaces de usuario funcionales. El proyecto destaca especialmente en la gestión de relaciones temporales, estadísticas agregadas y queries SQL optimizadas.

---

**Tecnologías**: PHP 8.3, Laravel 10, MySQL, Tailwind CSS, Blade, Eloquent ORM
**Repositorio**: https://github.com/JaviRL7/Arena
**Complejidad**: Alta (14 modelos, 27 migraciones, 100+ métodos personalizados)
