import React, { Suspense } from 'react';
import './App.css';
import { Model } from 'react-babylonjs';
import { Vector3 } from "@babylonjs/core";
import '@babylonjs/loaders/glTF';

type DisplayRemoteModelProps = {
    name: string,
    rootUrl: string,
    sceneFilename: string,
    position: Vector3,
}

const DisplayRemoteModel: React.FC<DisplayRemoteModelProps> = ({
    name,
    rootUrl,
    sceneFilename,
    position}) => {

   return (
        <Suspense fallback={<box name={name} position={position} />}>
            <Model
                name={name}
                rootUrl={rootUrl}
                sceneFilename={sceneFilename}
                scaleToDimension={1}
                position={position} />
        </Suspense>
    );
}

export const DemoScene: React.FC = () => {
    const baseUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/';

    return (
        <>
            <arcRotateCamera
                name="camera1"
                target={Vector3.Zero()}
                alpha={Math.PI / 2}
                beta={Math.PI / 4}
                radius={8}
            />
            <hemisphericLight
                name="light1"
                intensity={0.7}
                direction={Vector3.Up()}
            />
            <DisplayRemoteModel
                name={"Avocado"}
                rootUrl={`${baseUrl}Avocado/glTF/`}
                sceneFilename={"Avocado.gltf"}
                position={new Vector3(-2, 0, 0)}
            />
            <DisplayRemoteModel
                name={"Water Bottle"}
                rootUrl={`${baseUrl}BoomBox/glTF/`}
                sceneFilename={"BoomBox.gltf"}
                position={new Vector3(2, 0, 0)}
            />
        </>
    );
}