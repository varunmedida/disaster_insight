package edu.gsu.da.repository;

import edu.gsu.da.entity.Disaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DisasterRepository extends JpaRepository<Disaster, Long> {

    @Query(value = "SELECT * FROM disaster_data WHERE latitude IS NOT NULL AND longitude IS NOT NULL", nativeQuery = true)
    List<Disaster> findDisasters();

    @Query(value = "SELECT * FROM disaster_data WHERE disaster_type = :disasterType AND latitude IS NOT NULL AND longitude IS NOT NULL", nativeQuery = true)
    List<Disaster> findByDisasterTypeAndLatLongNotNull(String disasterType);

    @Query(value = "SELECT * FROM disaster_data", nativeQuery = true)
    List<Disaster> findDisastersWithCountryCode();
}
