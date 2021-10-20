class ApplicationException {
	constructor(
		public readonly message: string,
		public readonly statusCode: number
	) { }
}

export { ApplicationException };
