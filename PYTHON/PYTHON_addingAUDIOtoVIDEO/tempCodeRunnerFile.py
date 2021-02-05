import moviepy.editor as mpe
clip = mpe.VideoFileClip("Input/capture.webm")
audio_bg = mpe.AudioFileClip("Input/aryan3.mp3")
final_audio = mpe.CompositeAudioClip([audio_bg, clip.audio])
final_clip = clip.set_audio(final_audio)
final_clip.write_videofile("out/output.mp4")