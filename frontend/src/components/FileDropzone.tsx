import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

function FileDropzone(props: any) {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	useEffect(() => {
		props.onAttachmentsChanged(acceptedFiles);
	}, [acceptedFiles, props]);

	const files = acceptedFiles.map(file => (
		<li key={file.name}>
			{file.name} - {file.size} bytes
		</li>
	));

	return (
		<section className="container">
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			<aside>
				<h4>Files</h4>
				<ul>{files}</ul>
			</aside>
		</section>
	);
}

export default FileDropzone;
