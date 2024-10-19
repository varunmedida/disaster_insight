package edu.gsu.da.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "disaster_data")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class Disaster {

    @Id
    @Column(name = "disaster_number")
    private String disasterNumber;

    @Column(name = "historic")
    private String historic;

    @Column(name = "classification_key")
    private String classificationKey;

    @Column(name = "disaster_group")
    private String disasterGroup;

    @Column(name = "disaster_subgroup")
    private String disasterSubgroup;

    @Column(name = "disaster_type")
    private String disasterType;

    @Column(name = "disaster_subtype")
    private String disasterSubtype;

    @Column(name = "country_code")
    private String countryCode;

    @Column(name = "country")
    private String country;

    @Column(name = "subregion")
    private String subregion;

    @Column(name = "region")
    private String region;

    @Column(name = "location")
    private String location;

    @Column(name = "origin")
    private String origin;

    @Column(name = "associated_types")
    private String associatedTypes;

    @Column(name = "ofda_bha_response")
    private String ofdaBhaResponse;

    @Column(name = "appeal")
    private String appeal;

    @Column(name = "declaration")
    private String declaration;

    @Column(name = "aid_contribution_usd")
    private Double aidContributionUsd;

    @Column(name = "magnitude")
    private Double magnitude;

    @Column(name = "magnitude_scale")
    private String magnitudeScale;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "river_basin")
    private String riverBasin;

    @Column(name = "start_year")
    private Integer startYear;

    @Column(name = "start_month")
    private Integer startMonth;

    @Column(name = "start_day")
    private Integer startDay;

    @Column(name = "end_year")
    private Integer endYear;

    @Column(name = "end_month")
    private Integer endMonth;

    @Column(name = "end_day")
    private Integer endDay;

    @Column(name = "total_deaths")
    private Integer totalDeaths;

    @Column(name = "injured_number")
    private Integer injuredNumber;

    @Column(name = "affected_number")
    private Integer affectedNumber;

    @Column(name = "homeless_number")
    private Integer homelessNumber;

    @Column(name = "total_affected")
    private Integer totalAffected;

    @Column(name = "reconstruction_costs_usd")
    private Double reconstructionCostsUsd;

    @Column(name = "adjusted_reconstruction_costs_usd")
    private Double adjustedReconstructionCostsUsd;

    @Column(name = "insured_damage_usd")
    private Double insuredDamageUsd;

    @Column(name = "adjusted_insured_damage_usd")
    private Double adjustedInsuredDamageUsd;

    @Column(name = "total_damage_usd")
    private Double totalDamageUsd;

    @Column(name = "adjusted_total_damage_usd")
    private Double adjustedTotalDamageUsd;

    @Column(name = "cpi")
    private Double cpi;

    @Column(name = "entry_date")
    private String entryDate;

    @Column(name = "last_update")
    private String lastUpdate;

//    @Column(name = "date")
//    private LocalDate date;
}
