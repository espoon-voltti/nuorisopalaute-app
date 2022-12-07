import React, { useEffect, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import "../styles/FileDropzone.scss";
import { useT } from "../i18n";

function FileDropzone(props: any) {
	const {
		acceptedFiles,
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		accept: {
			"image/jpeg": [".jpeg", "jpg"],
			"image/png": [".png"],
			"image/gif": [".gif"],
			"image/tiff": [".tiff"],
			"application/pdf": [".pdf"],
			"application/msword": [".doc"],
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document":
				[".docx"],
			"text/plain": [".txt"],
			"application/zip": [".zip"],
			"application/vnd.ms-excel": [".xls"],
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
				[".xlsx"],
			"application/vnd.ms-powerpoint": [".ppt"],
			"application/vnd.openxmlformats-officedocument.presentationml.presentation":
				[".pptx"],
			"application/rtf": [".rtf"],
		},
	});

	const [files, setFiles] = useState<File[]>([]);
	const [totalSize, setTotalSize] = useState(0);

	const formAttachmentText = useT("formAttachmentsBtn");
	const mbText = useT("mb");

	useEffect(() => {
		const newFiles = files;

		// Only add those new accepted files that aren't yet in files
		acceptedFiles.forEach((file) => {
			if (!newFiles.some((el) => el.name === file.name))
				newFiles.push(file);
		});

		setFiles(newFiles);
		props.onAttachmentsChanged(newFiles);

		let _totalSize = 0;
		files.forEach((file) => {
			_totalSize += file.size;
		});
		setTotalSize(_totalSize / 1024.0 / 1024.0);
	}, [acceptedFiles, props]);

	const handleRemoveFileClick = (name: string) => {
		const newFiles = files.filter((file) => {
			if (file.name !== name) return true;
			return false;
		});
		setFiles(newFiles);
	};

	const filesDom = files.map((file) => {
		let filename = file.name;
		if (filename.length > 33)
			filename =
				filename.substring(0, 22) +
				"..." +
				filename.substring(filename.length - 6);
		return (
			<li key={file.name} className="dropzone-file">
				{filename} - {(file.size / 1024.0 / 1024.0).toFixed(1)} {mbText}
				<button
					onClick={() => handleRemoveFileClick(file.name)}
					className="dropzone-file-button"
				>
					Poista
				</button>
			</li>
		);
	});

	return (
		<section className="dropzone-container">
			<div {...getRootProps({ className: "dropzone", multiple: true })}>
				<input {...getInputProps()} />
				<p>{formAttachmentText}</p>
			</div>
			<aside className="dropzone-files">
				<ul>{filesDom}</ul>
				<p className="total">
					{files.length > 1
						? totalSize.toFixed(1) + " " + mbText
						: ""}
				</p>
			</aside>
		</section>
	);
}

export default FileDropzone;
