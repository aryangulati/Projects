import moviepy.editor as mpe
clip = mpe.VideoFileClip("input/Episode 5.mp4")
audio_bg = mpe.AudioFileClip("input/shakiraHips.mp3")
final_audio = mpe.CompositeAudioClip([audio_bg, clip.audio])
final_clip = clip.set_audio(final_audio)
final_clip.write_videofile("out/output.mp4")