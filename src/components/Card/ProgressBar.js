import { Progress, Text } from '@mantine/core';

function ProgressBar({ subtasks }) {
	const getCompletePercentage = () => {
		const completed = subtasks.filter((task) => task.isDone).length;
		const total = subtasks.length;
		return total === 0 ? 0 : Math.round((completed / total) * 100);
	};


	const percentageProgress = getCompletePercentage();

	return (
		percentageProgress > 0 && (
			<Progress
				value={percentageProgress}
				label={<Text fz={11}>{`${percentageProgress}%`}</Text>}
				color={percentageProgress >= 100 ? 'green' : 'blue'}
				size='lg'
				radius='xl'
				animate
			/>
		)
	);
}

export default ProgressBar;
