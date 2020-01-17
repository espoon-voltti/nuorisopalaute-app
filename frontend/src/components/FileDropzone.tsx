import React, { useEffect, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import "../styles/FileDropzone.scss";

function FileDropzone(props: any) {
	const { acceptedFiles, getRootProps, getInputProps, isDragActive,
		isDragAccept,
		isDragReject } = useDropzone({
			accept: "image/jpeg, image/png, image/gif, image/tiff, application/pdf,\
		application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document,\
		text/plain, application/zip, application/vnd.ms-excel,\
		application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,\
		application/vnd.ms-powerpoint,\
		application/vnd.openxmlformats-officedocument.presentationml.presentation,\
		application/rtf",
		});

	const [files, setFiles] = useState<File[]>([]);
	const [totalSize, setTotalSize] = useState(0);

	useEffect(() => {
		const newFiles = files;

		// Only add those new accepted files that aren't yet in files
		acceptedFiles.forEach(file => {
			if (!newFiles.some(el => el.name === file.name))
				newFiles.push(file);
		});

		setFiles(newFiles);
		props.onAttachmentsChanged(newFiles);

		let _totalSize = 0;
		files.forEach(file => {
			_totalSize += file.size;
		});
		setTotalSize(_totalSize / 1024.0 / 1024.0);
	}, [acceptedFiles, props]);

	const handleRemoveFileClick = (name: string) => {
		const newFiles = files.filter(file => {
			if (file.name !== name)
				return true;
			return false;
		})
		setFiles(newFiles);
	}

	const filesDom = files.map(file => (
		<li key={file.name}>
			{file.name} - {(file.size / 1024.0 / 1024.0).toFixed(1)} Mt
			<button onClick={() => handleRemoveFileClick(file.name)}>X</button>
		</li>
	));

	return (
		<section className="dropzone-container">
			<div {...getRootProps({ className: "dropzone", multiple: true })}>
				<input {...getInputProps()} />
				<p>+</p>
			</div>
			<aside className="dropzone-filenames">
				<ul>{filesDom}</ul>
				<ul>{files.length > 1 ? totalSize.toFixed(1) + " Mt" : ""}</ul>
			</aside>
		</section>
	);
}

export default FileDropzone;
