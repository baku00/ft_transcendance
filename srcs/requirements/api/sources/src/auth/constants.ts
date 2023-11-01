export function getExcludedPaths()
{
	return [
		'/profile/email/:email',
		'/persons/from-register-link',
		'/persons/from-register-link',
		'/teacher_courses/teacher/:id/course/:course_id/:file_name'
	];
}

export function canByPass(path: string)
{
	if ((path.startsWith('/auth/') && path !== '/auth/is-authorized'))
		return true;
	return getExcludedPaths().includes(path);
}