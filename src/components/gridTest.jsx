import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const GridTest = () => {
	return (
		<div>
			<h1>Helo</h1>

			<Grid container spacing={5}>
				<Grid item md={8}>
					<div style={{ backgroundColor: 'red' }}>einser</div>
				</Grid>
				<Grid item md={4}>
					<div style={{ backgroundColor: 'red' }}>einser</div>
				</Grid>
				<Grid items md={4}>
					<div style={{ backgroundColor: 'red' }}>einser</div>
				</Grid>
				<Grid item md={4}>
					<div style={{ backgroundColor: 'red' }}>einser</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default GridTest;
