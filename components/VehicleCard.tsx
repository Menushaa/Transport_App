import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Chip, Text } from 'react-native-paper';
import { useClickStore } from '../stores/clickStore';
import { Vehicle } from '../types';

interface VehicleCardProps {
    vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
    const increment = useClickStore((state) => state.increment);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'AVAILABLE': return 'green';
            case 'IN-TRANSIT': return 'blue';
            case 'MAINTANANCE': return 'orange';
            default: return 'gray';
        }
    };

    return (
        <Card style={styles.card} onPress={increment}>
            <Card.Cover source={{ uri: vehicle.imageUrl }} />
            <Card.Content style={styles.content}>
                <Text variant="titleLarge" style={styles.title}>{vehicle.title}</Text>
                <Chip
                    style={[styles.chip, { backgroundColor: getStatusColor(vehicle.status) }]}
                    textStyle={styles.chipText}
                >
                    {vehicle.status}
                </Chip>
                <Text variant="bodyMedium" style={styles.description}>{vehicle.description}</Text>
                <Text variant="bodySmall" style={styles.capacity}>Capacity: {vehicle.capacity} passengers</Text>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 8,
        elevation: 4,
    },
    content: {
        padding: 8,
    },
    title: {
        marginBottom: 8,
        color: "#fb0f6a",
        fontWeight:'semibold'

    },
    description: {
        marginBottom: 8,
    },
    capacity: {
        color: '#f95a97',
    },  
    chip: {
        marginVertical: 8,
        alignSelf: 'flex-start',
        borderRadius: 10,
    },
    chipText: {
        color: 'white',
    },
});